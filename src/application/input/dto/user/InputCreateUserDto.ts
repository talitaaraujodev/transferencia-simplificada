import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class InputCreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @MinLength(11, { message: 'Cpf deve ter pelo menos 11 caracteres' })
  @MaxLength(11, { message: 'Cpf/Cnpj deve ter no máximo 11 caracteres' })
  @IsNotEmpty({ message: 'Cpf é obrigatório' })
  cpf: string;

  @MinLength(10, { message: 'Telefone deve ter pelo menos 10 caracteres' })
  @MaxLength(11, { message: 'Telefone deve ter  no máximo 11 caracteres' })
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  telefone: string;

  @MinLength(6, { message: 'Password deve ter pelo menos 6 caracteres' })
  @IsNotEmpty({ message: 'Password é obrigatório' })
  password: string;
}
