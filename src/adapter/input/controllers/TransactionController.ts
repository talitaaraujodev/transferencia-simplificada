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
import { InputCreateTransactionDto } from '../../../application/input/dto/transaction/InputCreateTransactionDto';
import { TransactionServiceInputPort } from '../../../application/input/TransactionServiceInputPort';
import { Transaction } from '../../../domain/models/transaction/Transaction';

@Controller('transactions')
export class TransactionController {
  constructor(
    @Inject('TransactionServiceInputPort')
    private readonly transactionServiceInputPort: TransactionServiceInputPort,
  ) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: InputCreateTransactionDto): Promise<Transaction> {
    return await this.transactionServiceInputPort.create(body);
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id')
    id: string,
  ): Promise<Transaction> {
    return await this.transactionServiceInputPort.findOne(id);
  }
}
