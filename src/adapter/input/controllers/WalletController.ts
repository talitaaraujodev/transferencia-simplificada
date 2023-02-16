import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { InputCreateWalletDto } from '../../../application/input/dto/wallet/InputCreateWalletDto';
import { WalletServiceInputPort } from '../../../application/input/WalletServiceInputPort';
import { Wallet } from '../../../domain/models/wallet/Wallet';

@Controller('wallets')
export class WalletController {
  constructor(
    @Inject('WalletServiceInputPort')
    private readonly walletServiceInputPort: WalletServiceInputPort,
  ) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: InputCreateWalletDto): Promise<Wallet> {
    return await this.walletServiceInputPort.create(body);
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id')
    id: string,
  ): Promise<Wallet> {
    return await this.walletServiceInputPort.findOne(id);
  }
}
