import { Entity, Column, Unique } from 'typeorm';
import { User } from '@interfaces/users.interface';
import { BaseEntityWithTimestamps } from './bewt.entity';
import { UserRoleEnum } from '@/enums/user.role.enum';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['email'])
export class UserEntity extends BaseEntityWithTimestamps implements User {
  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.Customer })
  role: UserRoleEnum;
}
