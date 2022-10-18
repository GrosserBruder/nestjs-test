import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from '../common/BaseController';
import { CreateTechnicalInspectionTypesDto } from "./dto/createTechnicalInspectionTypes.dto";
import { UpdateTechnicalInspectionTypesDto } from "./dto/updateTechnicalInspectionTypes.dto";
import { TechnicalInspectionTypesEntity } from "./entity/technicalInspectionTypes.entity";
import { TechnicalInspectionTypesService } from "./technicalInspectionTypes.service";

@ApiTags("technical-inspection-types")
@Controller("technical-inspection-types")
export class TechnicalInspectionTypesController extends BaseController<TechnicalInspectionTypesEntity, TechnicalInspectionTypesService, CreateTechnicalInspectionTypesDto, UpdateTechnicalInspectionTypesDto> {
  constructor(private readonly dhlTypeService: TechnicalInspectionTypesService) {
    super(dhlTypeService)
  }
}