const database = ["apple", "banana", "orange", "grapes"]

export default defineEventHandler((event) => {
    return {
        database
    }
});