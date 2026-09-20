import { Module } from '@nestjs/common';
import { DatabaseService } from './service.module.js';

@Module({
  imports: [DatabaseService],
})
export class DatabaseModule {}
