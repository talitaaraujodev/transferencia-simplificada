import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { TransactionEntity } from './TransactionEntity';
import { UserEntity } from './UserEntitity';

@Entity({ name: 'wallets' })
export class WalletEntity {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: false })
  balance: number;

  @ManyToOne(() => UserEntity, (user) => user.wallets)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(
    () => TransactionEntity,
    (transactions) => transactions.walletAddressee,
  )
  transactionsWalletAddressee: TransactionEntity[];

  @OneToMany(
    () => TransactionEntity,
    (transactions) => transactions.walletOrigin,
  )
  transactionsWalletOrigin: TransactionEntity[];
}
