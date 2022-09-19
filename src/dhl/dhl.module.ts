import { DhlEntity } from './entity/dhl.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { DhlController } from "./dhl.controller";
import { DhlService } from "./dhl.service";
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DhlEntity]),
    TypeOrmModule.forFeature([DhlTypeEntity])
  ],
  controllers: [DhlController],
  providers: [DhlService],
})
export class DhlModule { }