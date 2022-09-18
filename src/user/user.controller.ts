import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get(":id")
  async get(id: string) {
    return this.userService.get(id);
  }

  @Post()
  async create(@Body() createDto: any) {
    this.userService.create(createDto);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateDto: any) {
    this.userService.update(id, updateDto);
  }

  @Delete(":id")
  async remove(@Param(":id") id: string) {
    this.userService.remove(id);
  }
}