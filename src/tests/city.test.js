const request = require("supertest")
const app = require('../app')

const city = {
  name: "Cordoba",
  country: "Arg",
  isCapital: false
}

const BASE_URL = '/api/v1/cities'

test("POST -> BASE_URL, should return statusCode 201, and res.body.name === city.name", async () => {

  const res = await request(app)
    .post(BASE_URL)
    .send(city)
  //  console.log(res.body);
  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})