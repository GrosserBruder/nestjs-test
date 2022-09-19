import { BaseEntity } from './../../common/base.entity';
import { Column, Entity } from "typeorm";

@Entity()
export class DhlTypeEntity extends BaseEntity {
  @Column()
  readonly name: string
}