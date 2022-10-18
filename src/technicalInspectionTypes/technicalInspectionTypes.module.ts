import { TechnicalInspectionTypesEntity } from './entity/technicalInspectionTypes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { TechnicalInspectionTypesController } from "./technicalInspectionTypes.controller";
import { TechnicalInspectionTypesService } from "./technicalInspectionTypes.service";

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalInspectionTypesEntity])],
  controllers: [TechnicalInspectionTypesController],
  providers: [TechnicalInspectionTypesService],
})
export class TechnicalInspectionTypesModule { }