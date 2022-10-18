import { ApiProperty } from "@nestjs/swagger";

export class CreateTechnicalInspectionTypesDto {
  @ApiProperty()
  readonly name: string
}