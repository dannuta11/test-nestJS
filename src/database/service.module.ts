import { Module, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '../prisma/client.js';

@Module({})
export class DatabaseService implements OnModuleInit {
  public prismaClient: PrismaClient;

  async onModuleInit() {
    await this.prismaClient.$connect();
  }
}
