import { IsNotEmpty } from 'class-validator';

export class InputCreateTransactionDto {
  @IsNotEmpty({ message: 'Value é obrigatório' })
  value: number;

  @IsNotEmpty({ message: 'WalletOrigin é obrigatório' })
  walletOrigin: string;

  @IsNotEmpty({ message: 'WalletAddressee é obrigatório' })
  walletAddressee: string;

  @IsNotEmpty({ message: 'UserOrigin é obrigatório' })
  userOrigin: string;

  @IsNotEmpty({ message: 'UserAddressee é obrigatório' })
  userAddressee: string;
}
