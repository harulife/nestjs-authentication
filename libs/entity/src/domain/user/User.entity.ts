import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @Generated('increment')
  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  static create({
    email,
    password,
    name,
    nickname
  }: {
    email: string,
    password: string,
    name: string,
    nickname: string
  }) {
    const user = new User();
    user.email = email;
    user.password = password;
    user.name = name;
    user.nickname = nickname;
    return user;
  }
}