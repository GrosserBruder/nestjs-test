import { DhlTypeEntity } from './../../dhlTypes/entity/dhl-type.entity';
import { BaseEntity } from '../../common/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class DhlEntity extends BaseEntity {
  @Column()
  name: string
  @OneToMany(() => DhlTypeEntity, (dhlTypeEntity) => dhlTypeEntity.dhls, {
    cascade: false
  })
  type: DhlTypeEntity
}