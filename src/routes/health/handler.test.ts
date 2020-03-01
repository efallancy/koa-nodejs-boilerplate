import { createMockContext } from '@shopify/jest-koa-mocks';
import { getHealth } from './handler';

describe('getHealth', () => {
  it('should set response message', () => {
    const ctx = createMockContext();

    getHealth(ctx);

    expect(ctx.body).toEqual({ message: 'OK! 🤙' });
  });
});
