import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDhlDto } from "./dto/create-dhl.dto";
import { UpdateDhlDto } from "./dto/update-dhl.dto";
import { DhlService } from "./dhl.service";

@ApiTags("dhl")
@Controller("dhl")
export class DhlController {
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
  create(@Body() createDto: CreateDhlDto) {
    return this.dhlService.create(createDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateDto: UpdateDhlDto) {
    return this.dhlService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    this.dhlService.remove(id);
    return
  }
}