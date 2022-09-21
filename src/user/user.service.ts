import { UserEntity } from './entity/user.entity';
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

  getAll() {
    return this.userRepository.find();
  }

  get(id: number) {
    return this.userRepository.findOneBy({
      id
    });
  }

  create(createDto: CreateUserDto) {
    return this.userRepository.save(createDto)
  }

  update(id: number, updateDto: UpdateUserDto) {
    return this.userRepository.update(id, updateDto)
      .then(() => {
        return this.userRepository.findOneBy({ id })
      });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}