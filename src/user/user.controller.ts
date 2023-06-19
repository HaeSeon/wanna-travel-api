import { Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from 'src/db/repository/user.repository';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}
}
