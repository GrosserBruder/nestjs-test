import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../common/BaseService';
import { CreateDhlSettingsDto } from "./dto/create-dhl-settings.dto";
import { UpdateDhlSettingsDto } from "./dto/update-dhl-settings.dto";
import { DhlSettingsEntity } from './entity/dhl-settings.entity';

@Injectable()
export class DhlSettingsService extends BaseService<DhlSettingsEntity> {
  constructor(
    @InjectRepository(DhlSettingsEntity) private readonly dhlRepository: Repository<DhlSettingsEntity>,
    @InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>,
  ) {
    super(dhlRepository)
  }

  getAll(): Promise<DhlSettingsEntity[]> {
    return super.getAll({
      relations: {
        type: true
      }
    })
  }

  async create(createDto: CreateDhlSettingsDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: createDto.typeId })

    const dhlEntity = new DhlSettingsEntity()

    dhlEntity.param1 = createDto.param1
    dhlEntity.param2 = createDto.param2
    dhlEntity.param3 = createDto.param3
    dhlEntity.type = type

    return super.create(dhlEntity)
  }

  async update(id: number, updateDto: UpdateDhlSettingsDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: updateDto.typeId })
    const dhlEntity = new DhlSettingsEntity()

    dhlEntity.param1 = updateDto.param1
    dhlEntity.param2 = updateDto.param2
    dhlEntity.param3 = updateDto.param3
    dhlEntity.type = type

    return super.update(id, dhlEntity)
  }
}