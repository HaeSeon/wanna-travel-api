import * as jwt from 'jsonwebtoken';
import { TokenPayload } from './auth.model';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

// TODO - delete
const JWT_SECRET = 'HelloWorld';
export const verifyJwt = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, JWT_SECRET, {}) as TokenPayload;
  } catch (e) {
    throw Error('Todo : add error handling');
  }
};

export function hash(value: string) {
  // todo : add sha256
  return value;
}

export const jwtConstants = {
  secret: configService.get('JWT_SECRET'),
};
