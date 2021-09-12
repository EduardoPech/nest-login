import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Eduardo',
      lastName: 'Pech',
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...createUserDto,
    };

    this.users.push(newUser);

    return this.users;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.counterId++;
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    const updateUser = {
      id,
      ...user,
      ...updateUserDto,
    };

    this.users[index] = updateUser;

    return this.users;
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    this.users.splice(index, 1);

    return this.users;
  }
}
