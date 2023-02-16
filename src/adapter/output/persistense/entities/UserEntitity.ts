import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TransactionEntity } from './TransactionEntity';
import { WalletEntity } from './WalletEntity';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ length: 11, unique: true, nullable: false })
  cpf: string;
  @Column({ length: 11, nullable: false })
  telefone: string;
  @Column()
  password: string;
  @OneToMany(() => WalletEntity, (wallets) => wallets.user)
  wallets: WalletEntity[];
  @OneToMany(
    () => TransactionEntity,
    (transactions) => transactions.userAddressee,
  )
  transactionsUserAddressee: TransactionEntity[];
  @OneToMany(() => TransactionEntity, (transactions) => transactions.userOrigin)
  transactionsUserOrigin: TransactionEntity[];

  constructor(
    id: string,
    name: string,
    email: string,
    cpf: string,
    telefone: string,
    password: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.password = password;
  }
}
