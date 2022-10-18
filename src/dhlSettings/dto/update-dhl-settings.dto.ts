import { ApiProperty } from "@nestjs/swagger";

export class UpdateDhlSettingsDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly typeId: number
}