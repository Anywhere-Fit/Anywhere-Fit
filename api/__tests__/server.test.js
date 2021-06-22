const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async (done) => {
  await db.destroy()
  done()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe("[GET] Classes", ()=>{
  beforeEach(async()=>{
      await db("Classes").insert({ClassId: 106, Name: "Rehab & Preventative Stretching"})
      await db("Classes").insert({ClassId: 107, Name: "Group Walk"})
  })

  it("Gets List Of Classes", async()=>{

      const result = await request(server).get("/api/classes")

      expect(result.body).toHaveLength(2)
  })
})

describe("[POST] Classes", ()=>{

  it("Posts new class and returns list with inserted class", async()=>{

      const newClass = {ClassId: 106, Name: "Rehab & Preventative Stretching"}

      await request(server).post("/api/classes").send(newClass)

      const result = await db("Classes")

      expect(result).toHaveLength(1)
  })
})
