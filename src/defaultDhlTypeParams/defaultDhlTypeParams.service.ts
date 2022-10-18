import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../common/BaseService';
import { createDefaultDhlTypeParams } from "./dto/createDefaultDhlTypeParams.dto";
import { updateDefaultDhlTypeParams } from "./dto/updateDefaultDhlTypeParams.dto";
import { DefaultDhlTypeParamsEntity } from './entity/defaultDhlTypeParams.entity';

@Injectable()
export class DefaultDhlTypeParamsService extends BaseService<DefaultDhlTypeParamsEntity> {
  constructor(
    @InjectRepository(DefaultDhlTypeParamsEntity) private readonly dhlRepository: Repository<DefaultDhlTypeParamsEntity>,
    @InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>,
  ) {
    super(dhlRepository)
  }

  getAll(): Promise<DefaultDhlTypeParamsEntity[]> {
    return super.getAll({
      relations: {
        type: true
      }
    })
  }

  async create(createDto: createDefaultDhlTypeParams) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: createDto.typeId })

    const dhlEntity = new DefaultDhlTypeParamsEntity()

    dhlEntity.param1 = createDto.param1
    dhlEntity.param2 = createDto.param2
    dhlEntity.param3 = createDto.param3
    dhlEntity.type = type

    return super.create(dhlEntity)
  }

  async update(id: number, updateDto: updateDefaultDhlTypeParams) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: updateDto.typeId })
    const dhlEntity = new DefaultDhlTypeParamsEntity()

    dhlEntity.param1 = updateDto.param1
    dhlEntity.param2 = updateDto.param2
    dhlEntity.param3 = updateDto.param3
    dhlEntity.type = type

    return super.update(id, dhlEntity)
  }
}