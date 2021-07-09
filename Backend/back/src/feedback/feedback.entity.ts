import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import{User} from '../user/user.entity'
import{Car} from '../car/car.entity'


@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Car, car => car.id)
  car: Car;

  @Column()
  content: String; 
}