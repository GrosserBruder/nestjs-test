import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number
  @CreateDateColumn()
  readonly createdAt: string
}