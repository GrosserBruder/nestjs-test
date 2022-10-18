import { ApiProperty } from "@nestjs/swagger";

export class UpdateTechnicalInspectionTypesDto {
  @ApiProperty()
  readonly name: string
}