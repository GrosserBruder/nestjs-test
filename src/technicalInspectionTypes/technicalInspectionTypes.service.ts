import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/BaseService';
import { Repository } from 'typeorm';
import { TechnicalInspectionTypesEntity } from './entity/technicalInspectionTypes.entity';

@Injectable()
export class TechnicalInspectionTypesService extends BaseService<TechnicalInspectionTypesEntity> {
  constructor(@InjectRepository(TechnicalInspectionTypesEntity) private readonly dhlTypeRepository: Repository<TechnicalInspectionTypesEntity>) {
    super(dhlTypeRepository)
  }
}