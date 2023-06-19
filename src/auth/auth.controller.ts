import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserRepository } from 'src/db/repository/user.repository';
import { UserCreateBody } from 'src/user/user.model';

@Controller('auth')
export class AuthController {
  constructor(private userRepository: UserRepository) {}

  @Post('/signup')
  async SignUp(@Body() body: UserCreateBody) {
    const isUser = await this.userRepository.exist({
      where: {
        userId: body.userId,
      },
    });
    if (isUser) {
      throw new BadRequestException('이미 가입된 아이디 입니다. ');
    }
    await this.userRepository.new({
      userId: body.userId,
      userName: body.userName,
      password: body.password,
    });
  }
}
