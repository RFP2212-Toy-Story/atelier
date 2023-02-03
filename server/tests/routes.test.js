import axios from 'axios';
import express from 'express';
import request from 'supertest';
import router from '../router.js';


const server = express();
server.use('/', router);
jest.mock('axios');
axios.get.mockResolvedValue({ status: 200, data: 'mocked-results' });

describe('test server routes', () => {
  test('responds to /', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('responds with 404 for bad routes', async () => {
    const response = await request(server).get('/no-such-route');
    expect(response.statusCode).toBe(404);
  });

  test('responds to /api/products', async () => {
    const response = await request(server).get('/api/products');
    expect(response.statusCode).toBe(200);
  });
});
