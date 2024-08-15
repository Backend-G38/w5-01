const request = require("supertest")
const app = require('../app')

let cityId


const BASE_URL = '/api/v1/cities'
const city = {
  name: "Cordoba",
  country: "Arg",
  isCapital: false
}


test("POST -> BASE_URL, should return statusCode 201, and res.body.name === city.name", async () => {

  const res = await request(app)
    .post(BASE_URL)
    .send(city)

  // console.log(res.body.id);
  cityId = res.body.id

  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})


test("GET -> BASE_URL, should return statusCode 200, and res.body.length === 1", async () => {
  const res = await request(app)
    .get(BASE_URL)

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body).toHaveLength(1)
  // expect(res.body.length).toBe(1)
})

//!!!!!!!!!!!!!! rutas dinamicas
// /api/v1/cities/:ID
//? BASE_URL     V.DINAMICO