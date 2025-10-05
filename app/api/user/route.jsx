import { usersTable } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, name } = await req.json();

  // Fallback for name if it's missing (using email as fallback)
  const safeName = name?.trim() || email?.split("@")[0] || "User";

  // Check if user already exists
  const user = await db.select().from(usersTable).where(eq(usersTable.email, email));

  // If user doesn't exist, insert new record
  if (user?.length == 0) {
    const result = await db.insert(usersTable).values({
      name: safeName,  // Use fallback name if none provided
      email: email
    }).returning(usersTable);

    console.log(result);
    return NextResponse.json(result);  // Return the result
  }

  // If user already exists, return the existing user
  return NextResponse.json(user[0]);
}
