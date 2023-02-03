import axios from 'axios';
import express from 'express';
import request from 'supertest';

import logger from '../utilities/logger.js';
import router from '../router.js';


const server = express();
server.use(express.json());
server.use(logger);
server.use('/', router);


jest.mock('axios');
axios.get.mockResolvedValue({ status: 200, data: 'mocked-results' });
axios.post.mockResolvedValue({ status: 200, data: 'mocked-results' });
axios.put.mockResolvedValue({ status: 201, data: 'mocked-results' });


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

  test('responds to /api/reviews?product_id=40344', async () => {
    const data = { data: 'test' };
    const response = await request(server).post('/api/reviews?product_id=40344').send(data);
    expect(response.statusCode).toBe(200);
  });

  test('responds to /api/reviews/1278333/helpful', async () => {
    const data = { data: 'test' };
    const response = await request(server).put('/api/reviews/1278333/helpful').send(data);
    expect(response.statusCode).toBe(201);
  });
});
