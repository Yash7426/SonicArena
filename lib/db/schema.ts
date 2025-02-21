import type { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const user = pgTable('User', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
  publicAddress: varchar('publicAddress', { length: 255 }).notNull().unique(),
  cryptoNonce: varchar('cryptoNonce', { length: 255 }),
  cryptoNonceExpires: timestamp('cryptoNonceExpires'),
  balance: varchar('balance')
});

export type User = InferSelectModel<typeof user>;