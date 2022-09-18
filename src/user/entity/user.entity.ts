export class UserEntity {
  constructor(
    readonly id: number,
    readonly firstName: string,
    readonly lastName: string,
    readonly middleName: string,
    readonly email: string,
  ) { }
}