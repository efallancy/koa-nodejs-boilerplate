import { createMockContext } from '@shopify/jest-koa-mocks';
import { greet } from './handler';

describe('greet', () => {
  it('should set greeting message', () => {
    const ctx = createMockContext({ requestBody: { name: 'Broody' } });

    greet(ctx);

    expect(ctx.body).toEqual({ message: 'Hello, Broody!' });
  });
});
