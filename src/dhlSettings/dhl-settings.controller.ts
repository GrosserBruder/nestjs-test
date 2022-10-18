import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from '../common/BaseController';
import { DhlSettingsService } from "./dhl-settings.service";
import { CreateDhlSettingsDto } from "./dto/create-dhl-settings.dto";
import { UpdateDhlSettingsDto } from "./dto/update-dhl-settings.dto";
import { DhlSettingsEntity } from './entity/dhl-settings.entity';

@ApiTags("dhl-settings")
@Controller("dhl-settings")
export class DhlSettingsController extends BaseController<DhlSettingsEntity, DhlSettingsService, CreateDhlSettingsDto, UpdateDhlSettingsDto> {
  constructor(private readonly dhlService: DhlSettingsService) {
    super(dhlService)
  }
}