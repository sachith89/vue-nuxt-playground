const database = ["apple", "banana", "orange", "grapes"]
export default defineEventHandler(async (event) => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    throw createError("ERR_001");

    return {
        database
    }
});