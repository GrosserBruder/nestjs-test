import { BaseService } from './../common/BaseService';
import { UserEntity } from './entity/user.entity';
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    super(userRepository)
  }
}