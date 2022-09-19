import { ApiProperty } from "@nestjs/swagger";

export class UpdateDhlDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly typeId: number
}