import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import type { Role } from '../types/users.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: Role) {
    const findUserByRole = this.userService.findByRole(role);
    return findUserByRole;
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findById(id);
    return user;
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: {}) {
    return user;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
