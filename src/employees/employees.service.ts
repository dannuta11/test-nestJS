import { Injectable, NotFoundException } from '@nestjs/common';

import { DatabaseService } from '../database/database.service.js';
import type {
  TestCreateInput,
  TestUpdateInput,
} from '../prisma/models/Test.js';

@Injectable()
export class EmployeesService {
  constructor(private readonly database: DatabaseService) {}

  async create(createEmployeeDto: TestCreateInput) {
    const test = await this.database.prismaClient.test.create({
      data: createEmployeeDto,
    });

    return test;
  }

  async findAll() {
    const allTests = await this.database.prismaClient.test.findMany();
    return allTests;
  }

  async findOne(id: string) {
    const test = await this.database.prismaClient.test.findFirst({
      where: {
        id,
      },
    });

    if (!test) {
      throw new NotFoundException('The test is not found');
    }

    return test;
  }

  async update(id: string, updateEmployeeDto: TestUpdateInput) {
    const updatedTest = await this.database.prismaClient.test.update({
      data: updateEmployeeDto,
      where: {
        id,
      },
    });
    return updatedTest;
  }

  async remove(id: string) {
    await this.database.prismaClient.test.delete({
      where: {
        id,
      },
    });
  }
}
