import { DhlEntity } from './../../dhl/entity/dhl.entity';
import { BaseEntity } from './../../common/base.entity';
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class DhlTypeEntity extends BaseEntity {
  @Column()
  name: string
  @ManyToOne(() => DhlEntity, (dhlEntity) => dhlEntity.type, {
    cascade: false,
  })
  dhls: Array<DhlEntity>
}