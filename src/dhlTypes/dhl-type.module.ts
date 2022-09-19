import { DhlTypeEntity } from './entity/dhl-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { DhlTypeController } from "./dhl-type.controller";
import { DhlService } from "./dhl-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([DhlTypeEntity])],
  controllers: [DhlTypeController],
  providers: [DhlService],
})
export class DhlModule { }