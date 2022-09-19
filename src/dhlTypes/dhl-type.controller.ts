import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDhlTypeDto } from "./dto/create-dhl-type.dto";
import { UpdateDhlTypeDto } from "./dto/update-dhl-type.dto";
import { DhlTypeService } from "./dhl-type.service";

@ApiTags("dhl-type")
@Controller("dhl-type")
export class DhlTypeController {
  constructor(private readonly dhlTypeService: DhlTypeService) { }

  @Get()
  getAll() {
    return this.dhlTypeService.getAll();
  }

  @Get(":id",)
  get(@Param("id", ParseIntPipe) id: number) {
    return this.dhlTypeService.get(id);
  }

  @Post()
  create(@Body() createDto: CreateDhlTypeDto) {
    return this.dhlTypeService.create(createDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateDto: UpdateDhlTypeDto) {
    return this.dhlTypeService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.dhlTypeService.remove(id);
  }
}