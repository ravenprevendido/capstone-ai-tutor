import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await currentUser(); // <-- correct Clerk helper
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const { email, name, role } = await req.json();
    const safeName = name?.trim() || email?.split("@")[0] || "User";
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUser.length === 0) {
      const newUser = await db
        .insert(usersTable)
        .values({
          name: safeName,
          email,
          clerk_id: user.id, // use currentUser id
          role: role || 'student',
        })
        .returning(); 

      return NextResponse.json(newUser[0], { status: 201 });
    }

    return NextResponse.json(existingUser[0], { status: 200 });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
