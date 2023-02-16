import { Wallet } from '../../domain/models/wallet/Wallet';
import { InputCreateWalletDto } from './dto/wallet/InputCreateWalletDto';

export interface WalletServiceInputPort {
  create(wallet: InputCreateWalletDto): Promise<Wallet>;
  findOne(id: string): Promise<Wallet>;
}
