const request = require("supertest");
const app = require("../app");

test("GET / returns application details", async () => {

  const response =
    await request(app).get("/");

  expect(response.statusCode).toBe(200);
	test("GET /health returns healthy", async () => {

  const response =
    await request(app).get("/health");

  expect(response.statusCode).toBe(200);

  expect(response.body.status)
    .toBe("healthy");

});
