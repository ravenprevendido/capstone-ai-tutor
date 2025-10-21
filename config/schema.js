
import { boolean, integer, json, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  clerk_id: varchar("clerk_id", {length: 255}).notNull(),
  role: text("role").notNull().default("student"),
});


export const courseTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 1000 }), 
  noOfChapters: integer().notNull(),
  includeVideo: boolean().default(false),
  level: varchar({ length: 50 }).notNull(),
  category: varchar({ length: 100 }).notNull(),
  courseJson: json(),
  userEmail: varchar('userEmail', { length: 255 }).references(() => usersTable.email).notNull(),
});




