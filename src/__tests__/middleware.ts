import supertest from 'supertest';

import server from '../server';

describe('middleware', () => {
  describe('setRequestId', () => {
    it('should contain request ID in response header', async () => {
      const response = await supertest(server.callback()).get('/health');

      expect(response.header).toHaveProperty('x-request-id');
    });
  });
});
