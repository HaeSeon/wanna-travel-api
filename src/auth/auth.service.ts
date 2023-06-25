import {
  Injectable,
  Body,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/db/repository/user.repository';
import { LoginBody, LoginResponse } from './auth.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(@Body() body: LoginBody): Promise<LoginResponse> {
    const user = await this.userRepository.findOneBy({
      userId: body.userId,
    });

    if (!user) throw new NotFoundException('유저를 찾을 수 없습니다');

    // TODO - hash
    if (body.password != user.password) {
      throw new BadRequestException('잘못된 비밀번호입니다');
    }

    const payload = {
      userId: user.userId,
      userName: user.userName,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      accessToken,
    };
  }
}
