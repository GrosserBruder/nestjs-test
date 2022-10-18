import { DefaultDhlTypeParamsEntity } from './entity/defaultDhlTypeParams.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { DefaultDhlTypeParamsController } from "./defaultDhlTypeParams.controller";
import { DefaultDhlTypeParamsService } from "./defaultDhlTypeParams.service";
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DefaultDhlTypeParamsEntity]),
    TypeOrmModule.forFeature([DhlTypeEntity])
  ],
  controllers: [DefaultDhlTypeParamsController],
  providers: [DefaultDhlTypeParamsService],
})
export class DefaultDhlTypeParamsModule { }