import { v4 as uuid } from 'uuid';
import { Transaction } from './Transaction';

describe('Transaction tests', () => {
  it('transaction_whenTransactionValid_returnSuccess', () => {
    const transaction = new Transaction(uuid(), 20, '1', '2', '1', '2');
    expect(transaction.value).toBe(20);
    expect(transaction.userOrigin).toBe('1');
    expect(transaction.walletOrigin).toBe('1');
    expect(transaction).toHaveProperty('id');
  });
});
