import supertest from 'supertest';

import server from '../server';

describe('/v1/greetings', () => {
  it('should return status 200 OK', async () => {
    const response = await supertest(server.callback())
      .post('/v1/greetings')
      .send({ name: 'Jenny' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: 'Hello, Jenny!' });
  });

  it('should return status 400 Bad Request on missing required body property', async () => {
    const response = await supertest(server.callback()).post('/v1/greetings');

    expect(response.status).toEqual(400);
  });
});
