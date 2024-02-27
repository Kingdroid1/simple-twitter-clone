import request from 'supertest';
import app from '../server';

describe('Server Tests', () => {
  it('should return a string on default url path', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('<p>Welcome to my Simple Twitter clone</p>');
  });

  it('should return 404 on not found request', async () => {
    const response = await request(app).get('/xyz');
    expect(response.status).toBe(404);
  });
});