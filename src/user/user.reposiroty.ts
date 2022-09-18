import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserRepository {
  data: Array<UserEntity> = []

  getAll() {
    return this.data;
  }

  get(id: number) {
    return this.data.find((x) => x.id === id)
  }

  create(createDto: CreateUserDto) {
    const item = new UserEntity(this.data.length + 1, createDto.firstName, createDto.lastName, createDto.middleName, createDto.email)
    this.data.push(item)

    return item;
  }

  update(id: number, updateDto: UpdateUserDto) {
    const index = this.data.findIndex((x) => x.id === id)
    const item = this.data[index]

    console.log(typeof id)
    console.log(index)

    const newItem = new UserEntity(item.id, updateDto.firstName, updateDto.lastName, updateDto.middleName, updateDto.email)

    this.data[index] = newItem

    return newItem
  }

  remove(id: number) {
    this.data.filter((x) => x.id !== id)

    return
  }
}