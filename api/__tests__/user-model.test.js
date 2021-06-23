const Users = require("../users/users-model");
const db = require("../data/db-config");

beforeAll(async()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async()=>{
    await db("Users").truncate()
})

afterAll(async()=>{
    await db.destroy()
})

describe("Users", ()=>{
    it("Testing Environment Is Correct", ()=>{
        const result = process.env.NODE_ENV

        expect(result).toBe("testing");
    })

    it("Displays A List Of Users", async()=>{
        const result = await db("Users")
        expect(result).toHaveLength(0)

        Users.createUser({UserId: 10, User_Username: "BigBoi", User_Password: 12345, User_Email: "bigboi@gmail.com", User_Role: "insutrctor" })
        const updatedResult = await db("Users")
        expect(updatedResult).toHaveLength(1)
    })
})