import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRepository } from "./user.reposiroty";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  getAll() {
    return this.userRepository.getAll();
  }

  get(id: number) {
    return this.userRepository.get(id);
  }

  create(createDto: CreateUserDto) {
    return this.userRepository.create(createDto);
  }

  update(id: number, updateDto: UpdateUserDto) {
    return this.userRepository.update(id, updateDto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}