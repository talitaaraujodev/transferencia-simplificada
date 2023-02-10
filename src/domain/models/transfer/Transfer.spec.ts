import { v4 as uuid } from 'uuid';
import { Transfer } from './Transfer';

describe('Transfer tests', () => {
  it('transfer_whenTransferValid_returnSuccess', () => {
    const transfer = new Transfer(uuid(), 20, 1, 1, 'Transferência test');

    expect(transfer.value).toBe(20);
    expect(transfer.descricao).toBe('Transferência test');
    expect(transfer).toHaveProperty('id');
  });
});
