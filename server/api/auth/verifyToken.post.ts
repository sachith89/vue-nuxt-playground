import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const {token} = await readBody(event)

    if (!token) {
        throw createError({statusCode: 401, message: "No token provided."})
    }

    const user = jwt.verify(token, process.env.JWT_PVT!)

    if (user) {
        return {
            success: true,
            user: {user}
        }
    }
})