import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.reposiroty";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async getAll() {
    return this.userRepository.getAll();
  }

  async get(id: string) {
    return this.userRepository.get(id);
  }

  async create(createDto: any) {
    this.userRepository.create(createDto);
  }

  async update(id: string, updateDto: any) {
    this.userRepository.update(id, updateDto);
  }

  async remove(id: string) {
    this.userRepository.remove(id);
  }
}