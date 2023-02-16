import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './UserEntitity';
import { WalletEntity } from './WalletEntity';

@Entity({ name: 'transactions' })
export class TransactionEntity {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: false })
  value: number;
  @ManyToOne(() => UserEntity, (users) => users.transactionsUserOrigin, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'userOrigin', referencedColumnName: 'id' }])
  userOrigin: UserEntity;

  @ManyToOne(() => UserEntity, (users) => users.transactionsUserAddressee, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'userAddressee', referencedColumnName: 'id' }])
  userAddressee: UserEntity;

  @ManyToOne(
    () => WalletEntity,
    (wallets) => wallets.transactionsWalletOrigin,
    {
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'walletOrigin', referencedColumnName: 'id' }])
  walletOrigin: WalletEntity;

  @ManyToOne(
    () => WalletEntity,
    (wallets) => wallets.transactionsWalletAddressee,
    {
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn([{ name: 'walletAddressee', referencedColumnName: 'id' }])
  walletAddressee: WalletEntity;
}
