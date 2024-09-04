const request = require('supertest');
const app = require('../../app')

describe('TEST GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
    .get('/launches')
    .expect('Content-Type', /json/)
    .expect(200)
    ;
  })
})

describe('TEST POST /launches', () => {
  test('Its should respond with 200 success', () => {

  })

  test('It should catch missing required properties', () => {})
  test('It should catch invalid dates', () => {})
})
