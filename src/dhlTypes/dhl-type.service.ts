import { DhlTypeEntity } from './entity/dhl-type.entity';
import { Injectable } from "@nestjs/common";
import { CreateDhlTypeDto } from "./dto/create-dhl-type.dto";
import { UpdateDhlTypeDto } from "./dto/update-dhl-type.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/common/BaseService';

@Injectable()
export class DhlTypeService extends BaseService<DhlTypeEntity> {
  constructor(@InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>) {
    super(dhlTypeRepository)
  }
}