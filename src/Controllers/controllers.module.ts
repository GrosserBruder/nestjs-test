import { Module } from "@nestjs/common";
import { ServicesModule } from "src/Services/services.module";
import { AppController } from "./AppController";

@Module({
  imports: [ServicesModule],
  controllers: [AppController],
})
export class ControllersModule { }