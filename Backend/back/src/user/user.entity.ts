import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  name: String;

  @Column()
  LastName: String;

  @Column()
  Email: String;

  @Column()
  phoneNumber: Number;

  @Column()
  password: String;

  @Column()
  image: String;

  @Column()
  adress: String;

  @Column()
  cin: Number;

  @Column()
  type: String;
}
