import { IsNotEmpty } from 'class-validator';

export class InputCreateWalletDto {
  @IsNotEmpty({ message: 'Balance é obrigatório' })
  balance: number;

  @IsNotEmpty({ message: 'UserId é obrigatório' })
  userId: string;
}
