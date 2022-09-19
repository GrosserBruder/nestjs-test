import { DhlEntity } from './entity/dhl.entity';
import { Injectable } from "@nestjs/common";
import { CreateDhlDto } from "./dto/create-dhl.dto";
import { UpdateDhlDto } from "./dto/update-dhl.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';

@Injectable()
export class DhlService {
  constructor(
    @InjectRepository(DhlEntity) private readonly dhlRepository: Repository<DhlEntity>,
    @InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>
  ) { }

  async getAll() {
    return this.dhlRepository.find({
      relations: {
        type: true,
      }
    });
  }

  async get(id: number) {
    return this.dhlRepository.findOne({
      where: {
        id
      },
      relations: {
        type: true
      }
    });
  }

  async create(createDto: CreateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: createDto.typeId })

    const dhlEntity = new DhlEntity()

    dhlEntity.name = createDto.name
    dhlEntity.type = type

    return this.dhlRepository.save(dhlEntity)
  }

  async update(id: number, updateDto: UpdateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: updateDto.typeId })
    const dhlEntity = new DhlEntity()

    dhlEntity.name = updateDto.name
    dhlEntity.type = type

    return this.dhlRepository.update({ id }, dhlEntity);
  }

  async remove(id: number) {
    return this.dhlRepository.delete(id);
  }
}