import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  data = []

  async getAll() {
    return this.data;
  }

  async get(id: string) {
    return this.data.find((x) => x.id = id)
  }

  async create(createDto: any) {
    const item = { ...createDto, id: this.data.length + 1 }
    this.data.push(item)

    return item;
  }

  async update(id: string, updateDto: any) {
    const index = this.data.findIndex((x) => x.id === id)
    this.data[index] = updateDto

    return this.data[index]
  }

  async remove(id: string) {
    this.data.filter((x) => x.id !== id)

    return
  }
}