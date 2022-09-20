import { DhlTypeEntity } from './entity/dhl-type.entity';
import { Injectable } from "@nestjs/common";
import { CreateDhlTypeDto } from "./dto/create-dhl-type.dto";
import { UpdateDhlTypeDto } from "./dto/update-dhl-type.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UsingJoinColumnIsNotAllowedError } from 'typeorm';

@Injectable()
export class DhlTypeService {
  constructor(@InjectRepository(DhlTypeEntity) private readonly dhlRepository: Repository<DhlTypeEntity>) { }

  getAll() {
    return this.dhlRepository.find();
  }

  get(id: number) {
    return this.dhlRepository.findOneBy({
      id
    });
  }

  create(createDto: CreateDhlTypeDto) {
    return this.dhlRepository.save(createDto)
  }

  update(id: number, updateDto: UpdateDhlTypeDto) {
    return this.dhlRepository.update(id, updateDto)
      .then(() => {
        return this.dhlRepository.findOneBy({ id })
      });
  }

  remove(id: number) {
    return this.dhlRepository.delete(id);
  }
}