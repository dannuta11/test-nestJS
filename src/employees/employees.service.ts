import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/service.module.js';
import type {
  TestCreateInput,
  TestUpdateInput,
} from '../prisma/models/Test.js';

@Injectable()
export class EmployeesService {
  constructor(private readonly database: DatabaseService) {}

  async create(createEmployeeDto: TestCreateInput) {
    const allTests = await this.database.prismaClient.$executeRaw`
    SELECT id, email, name, role, createAt, updatedAt from tests`;
    return allTests;
  }

  async findAll() {
    const allTests = await this.database.prismaClient.$executeRaw`
    SELECT id, email, name, role, createAt, updatedAt from tests`;
    return allTests;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: TestUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
