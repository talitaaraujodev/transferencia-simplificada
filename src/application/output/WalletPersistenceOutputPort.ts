import { WalletEntity } from '../../adapter/output/persistense/entities/WalletEntity';
import { Wallet } from '../../domain/models/wallet/Wallet';

export interface WalletPersistence {
  save(wallet: Wallet): Promise<Wallet>;
  findOne(id: string): Promise<WalletEntity>;
  findAll(): Promise<Wallet[]>;
}
