import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(":id",)
  get(@Param("id", ParseIntPipe) id: number) {
    return this.userService.get(id);
  }

  @Post()
  create(@Body() createDto: CreateUserDto) {
    return this.userService.create(createDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateDto: UpdateUserDto) {
    return this.userService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}