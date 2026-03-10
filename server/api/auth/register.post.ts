import {hash} from "bcrypt-ts";
import {userTable} from "#server/db/schema";

export default defineEventHandler(async (event) => {

    const {username, password} = await readBody(event);

    if (!username || !password) {
        throw createError({statusCode: 400, statusMessage: "Missing username or password"});
    }

    const hashedPassword = await hash(password, 10);

    const db = useDrizzle();
    const insertedResult = db.insert(userTable).values(
        {
            username: username,
            password: hashedPassword
        }
    ).returning();

    return insertedResult;
});

// install package bcrypt
// yarn add bcrypt-ts