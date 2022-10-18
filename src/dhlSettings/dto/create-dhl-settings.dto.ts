import { ApiProperty } from "@nestjs/swagger";

export class CreateDhlSettingsDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly typeId: number
}