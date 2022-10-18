import { DefaultDhlTypeParamsEntity } from "src/defaultDhlTypeParams/entity/defaultDhlTypeParams.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from './../../common/base.entity';
import { DhlEntity } from './../../dhl/entity/dhl.entity';

@Entity()
export class DhlTypeEntity extends BaseEntity {
  @Column()
  name: string
  @OneToMany(() => DhlEntity, (dhlEntity) => dhlEntity.type, {
    cascade: false,
  })
  dhls: Array<DhlEntity>
  @OneToMany(() => DhlEntity, (dhlEntity) => dhlEntity.type, {
    cascade: false,
  })
  defaultDhlTypeParams: Array<DefaultDhlTypeParamsEntity>
}