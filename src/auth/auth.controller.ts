import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UserRepository } from 'src/db/repository/user.repository';
import { UserCreateBody } from 'src/user/user.model';
import { LoginBody, LoginResponse } from './auth.model';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginBody): Promise<LoginResponse> {
    return this.authService.login(body);
  }

  @Post('signup')
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

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
