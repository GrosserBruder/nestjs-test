import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from '../../common/base.entity';
import { DhlTypeEntity } from '../../dhlTypes/entity/dhl-type.entity';

@Entity()
export class DhlSettingsEntity extends BaseEntity {
  @Column()
  name: string
  @ManyToOne(() => DhlTypeEntity, (dhlTypeEntity) => dhlTypeEntity.defaultDhlTypeParams, {
    cascade: false
  })
  type: DhlTypeEntity
}