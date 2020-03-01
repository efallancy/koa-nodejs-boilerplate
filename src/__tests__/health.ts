import supertest from 'supertest';

import server from '../server';

describe('/health', () => {
  it('should return status 200 OK', async () => {
    const response = await supertest(server.callback()).get('/health');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: 'OK! 🤙' });
  });
});
