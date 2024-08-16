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

test("GET -> BASE_URL/cityId, should return statusCode 200, and res.body.city === city.name", async () => {

  const res = await request(app)
    .get(`${BASE_URL}/${cityId}`)

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})


test("PUT -> BASE_URL/cityId, should return statusCode 200, and res.body.city === cityUpdate.name", async () => {

  const cityUpdate = {
    name: "Lima"
  }

  const res = await request(app)
    .put(`${BASE_URL}/${cityId}`)
    .send(cityUpdate)

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(cityUpdate.name)
})

test("Delete -> BASE_URL/cityId, should return statusCode 204", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${cityId}`)

  expect(res.statusCode).toBe(204)
})
