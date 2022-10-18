import { BaseEntity } from 'src/common/base.entity';
import { BaseService } from './BaseService';
import { Body, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeepPartial } from 'typeorm';

export class BaseController<TEntity extends BaseEntity, TService extends BaseService<TEntity>, TCreateDto extends DeepPartial<TEntity>, TUpdateDto extends DeepPartial<TEntity>> {
  constructor(private readonly service: TService) { }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(":id",)
  get(@Param("id", ParseIntPipe) id: number) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() createDto: TCreateDto) {
    return this.service.create(createDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateDto: TUpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    this.service.remove(id);
    return
  }
}