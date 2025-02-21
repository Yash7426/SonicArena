import "server-only";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import {
  user,
  type User,
} from "./schema";

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

// biome-ignore lint: Forbidden non-null assertion.
const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

/**
 * Fetch a user by their public wallet address.
 */
export async function getUserByPublicAddress(
  publicAddress: string
): Promise<Array<User>> {
  try {
    return await db
      .select()
      .from(user)
      .where(eq(user.publicAddress, publicAddress));
  } catch (error) {
    console.error("Failed to get user by public address");
    throw error;
  }
}

/**
 * Clear the crypto nonce and its expiry for a given user.
 */
export async function clearUserNonce(userId: string): Promise<void> {
  try {
    await db
      .update(user)
      .set({
        cryptoNonce: null,
        cryptoNonceExpires: null,
      })
      .where(eq(user.id, userId));
  } catch (error) {
    console.error("Failed to clear user nonce");
    throw error;
  }
}

/**
 * Upsert the user's crypto nonce data.
 * If a user with the given publicAddress exists, update their nonce;
 * otherwise, insert a new user record with the provided data.
 */
export async function upsertUserNonce({
  balance,
  publicAddress,
  cryptoNonce,
  cryptoNonceExpires,
}: {
  publicAddress: string;
  cryptoNonce: string;
  cryptoNonceExpires: string;
  balance?: string;
}): Promise<void> {
  try {
    const existingUsers = await getUserByPublicAddress(publicAddress);
    const expiryDate = new Date(cryptoNonceExpires); // Convert string to Date

    if (existingUsers.length > 0) {
      // Update the existing user's nonce data
      await db
        .update(user)
        .set({
          balance,
          cryptoNonce,
          cryptoNonceExpires: expiryDate,
        })
        .where(eq(user.publicAddress, publicAddress));
    } else {
      // Insert a new user with the public address and nonce data
      await db.insert(user).values({
        balance,
        publicAddress,
        cryptoNonce,
        cryptoNonceExpires: expiryDate,
      });
    }
  } catch (error) {
    console.error("Failed to upsert user nonce");
    throw error;
  }
}

export async function getUser(email: string): Promise<Array<User>> {
  try {
    return await db.select().from(user).where(eq(user.email, email));
  } catch (error) {
    console.error("Failed to get user from database");
    throw error;
  }
}

// export async function createUser(email: string, password: string) {
//   const salt = genSaltSync(10);
//   const hash = hashSync(password, salt);

//   try {
//     return await db.insert(user).values({ email, password: hash });
//   } catch (error) {
//     console.error('Failed to create user in database');
//     throw error;
//   }
// }

