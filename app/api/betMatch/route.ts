import { NextResponse } from "next/server";
import { getMatches } from "@/lib/db/queries";

// for the make bet page
export async function GET(req: Request) {
  try {
    const matches = await getMatches();
    if (!matches || matches.length === 0) {
      return NextResponse.json(
        { message: "No matches found for this user" },
        { status: 404 }
      );
    }
    return NextResponse.json({ matches });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch matches" },
      { status: 500 }
    );
  }
}
