import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

enum Role {
  INTERN = 'INTERN',
  ENGINEER = 'ENGINEER',
}

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: Role) {
    return { role };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Get(':id')
  findOneByType(@Param('id') id: string) {
    return { id };
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
