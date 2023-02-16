import { WalletEntity } from 'src/adapter/output/persistense/entities/WalletEntity';
import { Wallet } from '../../domain/models/wallet/Wallet';

export interface WalletPersistence {
  create(wallet: Wallet): Promise<Wallet>;
  findOne(id: string): Promise<WalletEntity>;
}
