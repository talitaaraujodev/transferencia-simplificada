import { Transaction } from '../../domain/models/transaction/Transaction';
import { InputCreateTransactionDto } from './dto/transaction/InputCreateTransactionDto';

export interface TransactionServiceInputPort {
  create(transaction: InputCreateTransactionDto): Promise<Transaction>;
  findOne(id: string): Promise<Transaction>;
  validateFieldsUserOriginAndAddressee(
    userOrigin: string,
    userAddressee: string,
  ): Promise<boolean>;
  validateFieldsWalletOriginAndAddressee(
    walletOrigin: string,
    walletAddressee: string,
  ): Promise<boolean>;
}
