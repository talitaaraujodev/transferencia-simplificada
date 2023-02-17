import { TransactionEntity } from '../../adapter/output/persistense/entities/TransactionEntity';
import { Transaction } from '../../domain/models/transaction/Transaction';

export interface TransactionPersistence {
  save(transaction: Transaction): Promise<Transaction>;
  findOne(id: string): Promise<TransactionEntity>;
}
