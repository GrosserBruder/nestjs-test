import { ApiProperty } from "@nestjs/swagger";

export class createDefaultDhlTypeParams {
  @ApiProperty()
  readonly param1: string
  @ApiProperty()
  readonly param2: string
  @ApiProperty()
  readonly param3: string
  @ApiProperty()
  readonly typeId: number
}