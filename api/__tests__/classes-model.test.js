const Classes = require("../classes/classes-model");
const db = require("../data/db-config");

beforeAll(async()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async()=>{
    await db("Classes").truncate()
})

afterAll(async()=>{
    await db.destroy()
})

describe("Classes", ()=>{
    it("Testing Environment Is Correct", ()=>{
        const result = process.env.NODE_ENV

        expect(result).toBe("testing");
    })

    it("Displays A List Of Classes", async()=>{
        const result = await db("Classes")
        expect(result).toHaveLength(0)

        Classes.addClass({ClassId: 105, Name: "Rehabilitation & Preventative Stretching, Active Movements"})
        const updatedResult = await db("Classes")
        expect(updatedResult).toHaveLength(1)
    })
    
    it("Posts A New Class", async()=>{
        const resulting = await db("Classes")
        expect(resulting).toHaveLength(0)

        await db("Classes").addClass({ClassId: 110, Name: "Rehabilitation & Preventative Stretching, Active Movements"})
        const updatedResult = await db("Classes")
        expect(updatedResult).toHaveLength(1)
    })

    it("Deletes A Class", async()=>{
        const result = await db("Classes")
        expect(result).toHaveLength(0)

        Classes.addClass({ClassId: 105, Name: "Rehabilitation & Preventative Stretching, Active Movements"})
        const updatedResult = await db("Classes")
        expect(updatedResult).toHaveLength(1)

        Classes.deleteClassByClassId(105)
        const finalResult = await db("Classes")
        expect(finalResult).toHaveLength(0);
    })
})