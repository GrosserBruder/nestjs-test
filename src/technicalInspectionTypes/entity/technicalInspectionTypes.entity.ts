import { Column, Entity } from "typeorm";
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class TechnicalInspectionTypesEntity extends BaseEntity {
  @Column()
  name: string
}