const request = require("supertest");
const server = require("../src/index");

describe("/api/gettask", () => {
  it("GET /api/gettask should return 200", async () => {
    const response = await request(server).get("/api/gettask");
    expect(response.status).toBe(200);
  });
});
