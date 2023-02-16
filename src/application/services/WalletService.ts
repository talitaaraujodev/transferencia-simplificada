import { Inject, HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Wallet } from '../../domain/models/wallet/Wallet';
import { InputCreateWalletDto } from '../input/dto/wallet/InputCreateWalletDto';
import { WalletServiceInputPort } from '../input/WalletServiceInputPort';
import { WalletPersistence } from '../output/WalletPersistenceOutputPort';
import { UserPersistence } from '../output/UserPersistenceOutputPort';

export class WalletService implements WalletServiceInputPort {
  constructor(
    @Inject('WalletPersistence')
    private readonly walletRepository: WalletPersistence,
    @Inject('UserPersistence')
    private readonly userRepository: UserPersistence,
  ) {}
  async create(wallet: InputCreateWalletDto): Promise<Wallet> {
    const userExists = await this.userRepository.findOne(wallet.userId);
    if (!userExists) {
      throw new HttpException('Usuário não encontrado', HttpStatus.CONFLICT);
    }
    const walletCreated = new Wallet(uuid(), wallet.balance, wallet.userId);
    return await this.walletRepository.create(walletCreated);
  }
  async findOne(id: string): Promise<Wallet> {
    const walletFound = await this.walletRepository.findOne(id);
    if (!walletFound) {
      throw new HttpException('Wallet não encontrado', HttpStatus.CONFLICT);
    }
    return new Wallet(walletFound.id, walletFound.balance, walletFound.user.id);
  }
}
