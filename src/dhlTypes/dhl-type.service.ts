import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/BaseService';
import { Repository } from 'typeorm';
import { DhlTypeEntity } from './entity/dhl-type.entity';

@Injectable()
export class DhlTypeService extends BaseService<DhlTypeEntity> {
  constructor(@InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>) {
    super(dhlTypeRepository)
  }
}