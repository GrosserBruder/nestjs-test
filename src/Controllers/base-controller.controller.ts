import { Get, Post, Put, Delete, Param } from "@nestjs/common";
import { BaseCrudService } from "src/Services/base-crud-service.service";

export class BaseController {
  constructor(private readonly service: BaseCrudService) { }

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.service.get(id)
  }

  @Post()
  create() {
    return this.service.create()
  }

  @Put()
  update() {
    return this.service.update()
  }

  @Delete()
  delete() {
    return this.service.delete()
  }
}