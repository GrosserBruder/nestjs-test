import { ApiProperty } from "@nestjs/swagger";

export class UpdateDhlTypeDto {
  @ApiProperty()
  readonly name: string
}