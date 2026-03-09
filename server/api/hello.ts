//const database = ["apple", "banana", "orange", "grapes"]
import {useDrizzle} from "#server/utils/drizzle";
import {fruitsTable} from "#server/db/schema";

export default defineEventHandler(async (event) => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // throw createError("ERR_001");

    const fruits = useDrizzle()
        .select()
        .from(fruitsTable)
        .all();

    return {
        fruits
    }
});