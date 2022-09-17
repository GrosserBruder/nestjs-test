import { Module } from "@nestjs/common";
import { AppService } from "./AppService";

const providers = [AppService]

@Module({
  providers,
  exports: providers
})
export class ServicesModule { }