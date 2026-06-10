const request = require("supertest");
const app = require("../app");

test("GET / returns application details", async () => {

  const response =
    await request(app).get("/");

  expect(response.statusCode).toBe(200);

});
