import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Role } from '../../types/users.js';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role, {
    message: 'Valid role required',
  })
  role: Role;
}
