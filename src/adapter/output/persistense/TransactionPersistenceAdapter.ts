import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../../../domain/models/transaction/Transaction';
import { Repository } from 'typeorm';
import { TransactionPersistence } from '../../../application/output/TransactionPersistenceOutputPort';
import { TransactionEntity } from './entities/TransactionEntity';
import { Inject } from '@nestjs/common/decorators';
import { WalletPersistence } from '../../../application/output/WalletPersistenceOutputPort';
import { Wallet } from '../../../domain/models/wallet/Wallet';
import { appDataSource } from 'src/config/ormConfig';

export class TransactionPersistenceAdapter implements TransactionPersistence {
  constructor(
    @InjectRepository(TransactionEntity)
    public readonly transactionRepository: Repository<TransactionEntity>,
    @Inject('WalletPersistence')
    private readonly walletPersistence: WalletPersistence,
  ) {}

  async save(transaction: Transaction): Promise<Transaction> {
    const queryRunner = appDataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const walletAddressee = await this.walletPersistence.findOne(
        transaction.walletAddressee,
      );
      const walletOrigin = await this.walletPersistence.findOne(
        transaction.walletOrigin,
      );

      const balanceAddressee =
        Number(walletAddressee.balance) + Number(transaction.value);
      const balanceOrigin =
        Number(walletOrigin.balance) - Number(transaction.value);

      await this.walletPersistence.save(
        new Wallet(walletOrigin.id, balanceOrigin, walletOrigin.user.id),
      );
      await this.walletPersistence.save(
        new Wallet(
          walletAddressee.id,
          balanceAddressee,
          walletAddressee.user.id,
        ),
      );
      const transactionEntitySaved = await this.transactionRepository.save({
        id: transaction.id,
        userAddressee: { id: transaction.userAddressee },
        userOrigin: { id: transaction.userOrigin },
        walletOrigin: { id: transaction.walletOrigin, balance: balanceOrigin },
        walletAddressee: {
          id: transaction.walletAddressee,
          balance: balanceAddressee,
        },
        value: transaction.value,
      });
      return new Transaction(
        transactionEntitySaved.id,
        transactionEntitySaved.value,
        walletOrigin.id,
        walletAddressee.id,
        transactionEntitySaved.userOrigin.id,
        transactionEntitySaved.userAddressee.id,
      );
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  async findOne(id: string): Promise<TransactionEntity> {
    return await this.transactionRepository.findOne({
      where: { id },
    });
  }
}
