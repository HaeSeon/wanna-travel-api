import { Injectable } from '@nestjs/common';
import { DataSource, Like, Repository } from 'typeorm';
import { User } from '../model/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findById(id: string) {
    return this.findOneBy({
      userId: id,
    });
  }

  async searchByName(userName: string, take = 5) {
    return this.find({
      where: {
        userName: Like(`%${userName}%`),
      },
      take: take,
    });
  }

  async new(args: { userId: string; userName: string; password: string }) {
    return this.save({
      userId: args.userId,
      userName: args.userName,
      password: args.password,
    });
  }
}
