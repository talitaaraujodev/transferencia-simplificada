import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTransactions1676481839518 implements MigrationInterface {
  private table = new Table({
    name: 'transactions',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        isNullable: false,
      },
      {
        name: 'value',
        type: 'decimal',
        precision: 65,
        scale: 2,
        isNullable: false,
      },
      {
        name: 'walletOrigin',
        type: 'varchar',
        length: '36',
        isNullable: false,
      },
      {
        name: 'walletAddressee',
        type: 'varchar',
        length: '36',
        isNullable: false,
      },
      {
        name: 'userOrigin',
        type: 'varchar',
        length: '36',
        isNullable: false,
      },
      {
        name: 'userAddressee',
        type: 'varchar',
        length: '36',
        isNullable: false,
      },
    ],
  });

  private foreignKeyTransactionsWalletOrigin = new TableForeignKey({
    columnNames: ['walletOrigin'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'wallets',
  });
  private foreignKeyTransactionsWalletAddressee = new TableForeignKey({
    columnNames: ['walletAddressee'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'wallets',
  });
  private foreignKeyTransactionsUserOrigin = new TableForeignKey({
    columnNames: ['userOrigin'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  private foreignKeyTransactionsUserAddressee = new TableForeignKey({
    columnNames: ['userAddressee'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
    await queryRunner.createForeignKey(
      'transactions',
      this.foreignKeyTransactionsWalletOrigin,
    );
    await queryRunner.createForeignKey(
      'transactions',
      this.foreignKeyTransactionsWalletAddressee,
    );
    await queryRunner.createForeignKey(
      'transactions',
      this.foreignKeyTransactionsUserOrigin,
    );
    await queryRunner.createForeignKey(
      'transactions',
      this.foreignKeyTransactionsUserAddressee,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
