import { User } from 'src/db/model/user.entity';

export interface UserDto {
  userId: string;
  userName: string;
}

export interface UserCreateBody {
  userId: string;
  userName: string;
  password: string;
}
