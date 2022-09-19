import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDhlTypeDto } from "./dto/create-dhl-type.dto";
import { UpdateDhlTypeDto } from "./dto/update-dhl-type.dto";
import { DhlService } from "./dhl-type.service";

@ApiTags("dhl-type")
@Controller("dhl-type")
export class DhlTypeController {
  constructor(private readonly dhlService: DhlService) { }

  @Get()
  getAll() {
    return this.dhlService.getAll();
  }

  @Get(":id",)
  get(@Param("id", ParseIntPipe) id: number) {
    return this.dhlService.get(id);
  }

  @Post()
  create(@Body() createDto: CreateDhlTypeDto) {
    return this.dhlService.create(createDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateDto: UpdateDhlTypeDto) {
    return this.dhlService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.dhlService.remove(id);
  }
}