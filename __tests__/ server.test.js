'use strict';
const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);

const { db } = require('../src/models/index');



beforeAll(async () => {
    await db.sync();
});
describe(" Web Servers",()=>{
test("404 on a bad route",async ()=>{
 const resp = await mockRequest.get("/mo")
  expect(resp.status).toBe(404)
})
test("404 on a bad method",async()=>{
    const resp = await mockRequest.put("/food")
    console.log("resp.status");
    expect(resp.status).toBe(404)
})
it("Read a list of records using GET",async()=>{
    const resp = await mockRequest.get("/food")
    expect(resp.status).toBe(200)
})
it("Read a list of records using create",async()=>{
    const resp = await mockRequest.post("/food").send({
        food:"Mansaf",
    })
    expect(resp.status).toBe(201)
})
it("Read a list of records using put",async()=>{
    const resp = await mockRequest.put("/food/1").send({
        food:"pizza"
    })
    expect(resp.status).toBe(201)
})
it("Read a list of records using get/id",async()=>{
    const resp = await mockRequest.get("/food/1")
    expect(resp.status).toBe(200)
})
it("Read a list of records using delete",async()=>{
    const resp = await mockRequest.delete("/food/1")
    expect(resp.status).toBe(204)
})
afterAll(async () => {
    await db.drop();})
})