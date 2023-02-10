import { IsNotEmpty } from 'class-validator';

export class InputCreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;
  @IsNotEmpty({ message: 'Cpf é obrigatório' })
  cpf: number;
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  telefone: number;
}
