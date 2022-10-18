import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from '../common/BaseController';
import { DefaultDhlTypeParamsService } from "./defaultDhlTypeParams.service";
import { createDefaultDhlTypeParams } from "./dto/createDefaultDhlTypeParams.dto";
import { updateDefaultDhlTypeParams } from "./dto/updateDefaultDhlTypeParams.dto";
import { DefaultDhlTypeParamsEntity } from './entity/defaultDhlTypeParams.entity';

@ApiTags("default-dhl-type-params")
@Controller("default-dhl-type-params")
export class DefaultDhlTypeParamsController extends BaseController<DefaultDhlTypeParamsEntity, DefaultDhlTypeParamsService, createDefaultDhlTypeParams, updateDefaultDhlTypeParams> {
  constructor(private readonly dhlService: DefaultDhlTypeParamsService) {
    super(dhlService)
  }
}