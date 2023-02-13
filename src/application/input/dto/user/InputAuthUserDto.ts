import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class InputAuthUserDto {
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;
  @MinLength(6, { message: 'Password deve ter pelo menos 6 caracteres' })
  @IsNotEmpty({ message: 'Password é obrigatório' })
  password: string;
}
