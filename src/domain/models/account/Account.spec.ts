import { v4 as uuid } from 'uuid';
import { Account } from './Account';

describe('User tests', () => {
  it('generateNumber_whenGenerateNumber_returnNumber', () => {
    const user = new Account(uuid(), 1);

    expect(typeof user.number).toBe('number');
  });
  it('account_whenAccountValid_returnSucces', () => {
    const user = new Account(uuid(), 1);

    expect(user.userId).toBe(1);
    expect(user.number).toBe(user.number);
    expect(user).toHaveProperty('id');
  });
});
