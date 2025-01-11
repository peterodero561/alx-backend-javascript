const request = require('supertest');
const app = require('./api'); // Import the Express app

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return the welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Welcome to the payment system');
    });
  });

  describe('GET /available_payments', () => {
    it('should return available payment methods', async () => {
      const res = await request(app).get('/available_payments');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the username', async () => {
      const res = await request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .set('Content-Type', 'application/json');

      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Welcome Betty');
    });

    it('should return 400 if no username is provided', async () => {
      const res = await request(app)
        .post('/login')
        .send({})
        .set('Content-Type', 'application/json');

      expect(res.statusCode).toBe(400);
      expect(res.text).toBe('UserName is required');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for a valid cart ID', async () => {
      const res = await request(app).get('/cart/12');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Payment methods for cart 12');
    });

    it('should return 404 for an invalid cart ID', async () => {
      const res = await request(app).get('/cart/hello');
      expect(res.statusCode).toBe(404);
    });
  });
});
