import { DhlEntity } from './entity/dhl.entity';
import { BaseController } from './../common/BaseController';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDhlDto } from "./dto/create-dhl.dto";
import { UpdateDhlDto } from "./dto/update-dhl.dto";
import { DhlService } from "./dhl.service";

@ApiTags("dhl")
@Controller("dhl")
export class DhlController extends BaseController<DhlEntity, DhlService, CreateDhlDto, UpdateDhlDto> {
  constructor(private readonly dhlService: DhlService) {
    super(dhlService)
  }
}