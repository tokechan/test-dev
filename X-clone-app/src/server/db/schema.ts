import { pgTable, serial, text, timestamp, index } from "drizzle-orm/pg-core"

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (table) => [
    index("Post_name_idx").on(table.name)
  ]
);


export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    clerkId: text("clerkId").notNull(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    handle: text("handle").notNull(),
    avatorUrl: text("avatorUrl"),
    bio: text("bio"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (table) => [index("User_email_idx").on(table.email)]
);
