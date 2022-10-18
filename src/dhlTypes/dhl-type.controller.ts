import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';
import { BaseController } from './../common/BaseController';
import { DhlTypeService } from "./dhl-type.service";
import { CreateDhlTypeDto } from "./dto/create-dhl-type.dto";
import { UpdateDhlTypeDto } from "./dto/update-dhl-type.dto";

@ApiTags("dhl-type")
@Controller("dhl-type")
export class DhlTypeController extends BaseController<DhlTypeEntity, DhlTypeService, CreateDhlTypeDto, UpdateDhlTypeDto> {
  constructor(private readonly dhlTypeService: DhlTypeService) {
    super(dhlTypeService)
  }
}