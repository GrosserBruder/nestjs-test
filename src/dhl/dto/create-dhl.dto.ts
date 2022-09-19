import { ApiProperty } from "@nestjs/swagger";

export class CreateDhlDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly typeId: number
}