import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../../../domain/models/wallet/Wallet';
import { Repository } from 'typeorm';
import { WalletPersistence } from '../../../application/output/WalletPersistenceOutputPort';
import { WalletEntity } from './entities/WalletEntity';

export class WalletPersistenceAdapter implements WalletPersistence {
  constructor(
    @InjectRepository(WalletEntity)
    public readonly walletRepository: Repository<WalletEntity>,
  ) {}

  async save(wallet: Wallet): Promise<Wallet> {
    const walletEntitySaved = await this.walletRepository.save({
      id: wallet.id,
      balance: wallet.balance,
      user: { id: wallet.userId },
    });

    return new Wallet(
      walletEntitySaved.id,
      walletEntitySaved.balance,
      walletEntitySaved.user.id,
    );
  }
  async findOne(id: string): Promise<WalletEntity> {
    return await this.walletRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
  }
}
