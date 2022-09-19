import { DhlTypeEntity } from './entity/dhl-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { DhlTypeController } from "./dhl-type.controller";
import { DhlTypeService } from "./dhl-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([DhlTypeEntity])],
  controllers: [DhlTypeController],
  providers: [DhlTypeService],
})
export class DhlModule { }