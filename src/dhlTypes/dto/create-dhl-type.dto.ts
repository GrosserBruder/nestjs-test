import { ApiProperty } from "@nestjs/swagger";

export class CreateDhlTypeDto {
  @ApiProperty()
  readonly name: string
}