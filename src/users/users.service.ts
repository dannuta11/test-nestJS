import { Injectable, NotFoundException } from '@nestjs/common';

import type { Role } from '../types/users.js';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'user',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'user',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      role: 'manager',
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: 'user',
    },
  ];

  findByRole(role?: Role) {
    if (role) {
      const filterUsersByRole = this.users.filter((user) => user.role === role);
      return filterUsersByRole;
    }

    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User Not Found!');
    }

    return user;
  }
}
