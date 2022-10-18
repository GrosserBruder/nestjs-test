import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/common/BaseController";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from './entity/user.entity';
import { UserService } from "./user.service";

@ApiTags("user")
@Controller("user")
export class UserController extends BaseController<UserEntity, UserService, CreateUserDto, UpdateUserDto>  {
  constructor(private readonly userService: UserService) {
    super(userService)
  }
}