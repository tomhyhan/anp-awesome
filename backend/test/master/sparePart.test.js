import request from 'supertest';
import app from '../../app';

describe('Get Spare Parts', (done) => {
  describe('Get All spare parts', () => {
    it('should respond 200', async () => {
      const response = await request(app).get('/master/spare_part/all');

      expect(response.statusCode).toBe(204);
    });
  });
});

// /auth/login
