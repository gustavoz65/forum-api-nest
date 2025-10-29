import { PrismaClient } from '@prisma/client';
import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class PrismaService
  extends PrismaClient
  implements OnModuleDestroy
{
  async onModuleDestroy() {
    await this.$connect();
  }
}
