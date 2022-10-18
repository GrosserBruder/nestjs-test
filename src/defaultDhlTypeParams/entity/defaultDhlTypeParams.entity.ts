import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from '../../common/base.entity';
import { DhlTypeEntity } from '../../dhlTypes/entity/dhl-type.entity';

@Entity()
export class DefaultDhlTypeParamsEntity extends BaseEntity {
  @Column()
  param1: string
  @Column()
  param2: string
  @Column()
  param3: string
  @ManyToOne(() => DhlTypeEntity, (dhlTypeEntity) => dhlTypeEntity.defaultDhlTypeParams, {
    cascade: false
  })
  type: DhlTypeEntity
}