import request from 'supertest'
import { app } from '../app'

describe('root path requests', () => {
	it('it responds 200 to the GET method', async () => {
		const result = await request(app).get('/').send()

		expect(result.status).toBe(200)
	})

	it('it responds 404 to the POST method', async () => {
		const result = await request(app).post('/').send()

		expect(result.status).toBe(404)
	})

	it('it responds 404 to the PATCH method', async () => {
		const result = await request(app).patch('/').send()

		expect(result.status).toBe(404)
	})

	it('it responds 404 to the DELETE method', async () => {
		const result = await request(app).delete('/').send()

		expect(result.status).toBe(404)
	})
})
