import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1676477434727 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        isNullable: false,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: false,
        isPrimary: true,
      },
      {
        name: 'cpf',
        type: 'varchar',
        length: '11',
        isNullable: false,
        isPrimary: true,
      },
      {
        name: 'telefone',
        type: 'varchar',
        length: '11',
        isNullable: false,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
