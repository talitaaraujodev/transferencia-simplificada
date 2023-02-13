import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
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

  constructor(
    id: string | null,
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
