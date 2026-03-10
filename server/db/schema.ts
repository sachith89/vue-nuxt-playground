import {sqliteTable, int, text} from "drizzle-orm/sqlite-core";

export const fruitsTable = sqliteTable("fruits", {
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull(),
});

export const userTable = sqliteTable("users", {
    id: int().primaryKey({autoIncrement: true}),
    username: text().notNull(),
    password: text().notNull(),
});