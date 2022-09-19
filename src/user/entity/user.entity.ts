import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  readonly firstName: string
  @Column()
  readonly lastName: string
  @Column()
  readonly middleName: string
  @Column()
  readonly email: string
}