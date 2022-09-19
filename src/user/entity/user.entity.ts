import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number
  @Column()
  readonly firstName: string
  @Column()
  readonly lastName: string
  @Column()
  readonly middleName: string
  @Column()
  readonly email: string
  @CreateDateColumn()
  readonly createdAt: string
}