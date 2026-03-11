import {compare, hash} from "bcrypt-ts";
import {userTable} from "#server/db/schema";
import {eq} from "drizzle-orm";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {

    const {username, password} = await readBody(event);

    if (!username || !password) {
        throw createError({statusCode: 400, statusMessage: "Missing username or password"});
    }

    const db = useDrizzle();

    const user = db.select()
        .from(userTable)
        .where(eq(userTable.username, username)).limit(1)
        .get();

    if (!user) {
        throw createError({statusCode: 401, statusMessage: "Invalid username or password"});
    }

    if (!(await compare(password, user.password))) {
        throw createError({statusCode: 401, statusMessage: "Invalid username or password"});
    }

    const token = jwt.sign(
        {userId: user.id, username: user.username},
        process.env.JWT_PVT!,
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        }
    );

    return {token};
});

// install package bcrypt
// yarn add bcrypt-ts

//yarn add jsonwebtoken
//yarn add @types/jsonwebtoken
