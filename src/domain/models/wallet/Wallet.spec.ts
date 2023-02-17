import { v4 as uuid } from 'uuid';
import { Wallet } from './Wallet';

describe('Wallet tests', () => {
  it('changeBalance_whenUpdateBalance_returnSuccess', () => {
    const wallet = new Wallet(uuid(), 20, uuid());

    wallet.changeBalance(40);
    expect(wallet.balance).toBe(40);
  });
  it('wallet_whenUserValid_returnSuccess', () => {
    const wallet = new Wallet(uuid(), 20, uuid());
    expect(wallet.balance).toBe(20);
    expect(wallet).toHaveProperty('userId');
    expect(wallet).toHaveProperty('id');
  });
});
