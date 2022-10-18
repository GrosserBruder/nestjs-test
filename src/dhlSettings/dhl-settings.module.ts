import { DhlSettingsEntity } from './entity/dhl-settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { DhlSettingsController } from "./dhl-settings.controller";
import { DhlSettingsService } from "./dhl-settings.service";
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DhlSettingsEntity]),
    TypeOrmModule.forFeature([DhlTypeEntity])
  ],
  controllers: [DhlSettingsController],
  providers: [DhlSettingsService],
})

export class DhlSettingsModule { }