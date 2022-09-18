import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.reposiroty";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule { }