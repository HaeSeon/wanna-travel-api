import { IsNotEmpty } from 'class-validator';

export class LoginBody {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  password: string;
}

export interface TokenPayload {
  readonly userId: string;
  readonly userName: string;
}

export type RequestToken = TokenPayload;

export interface LoginResponse {
  readonly accessToken: string;
}
