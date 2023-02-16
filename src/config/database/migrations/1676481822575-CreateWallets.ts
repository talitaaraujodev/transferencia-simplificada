import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateWallets1676481822575 implements MigrationInterface {
  private table = new Table({
    name: 'wallets',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        isNullable: false,
      },
      {
        name: 'balance',
        type: 'decimal',
        precision: 65,
        scale: 2,
        isNullable: false,
      },
      {
        name: 'userId',
        type: 'varchar',
        length: '36',
        isNullable: false,
      },
    ],
  });

  private foreignKeyWallets = new TableForeignKey({
    columnNames: ['userId'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
    await queryRunner.createForeignKey('wallets', this.foreignKeyWallets);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
