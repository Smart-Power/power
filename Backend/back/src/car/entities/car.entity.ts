import { Entity, Column, PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
import {Feedback} from '../../feedback/feedback.entity'

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feedback, feedback => feedback.id) 
  feedback: Feedback[];  

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  engine: string;
  
  @Column()
  price: number;

  @Column()
  seats: number;

  @Column()
  doors: number;

  @Column()
  suitcases: number;

  @Column()
  airconditioner: string;

  @Column()
  transmission: string;

  @Column()
  file1: string;

  @Column()
  file2: string;

  @Column()
  file3: string;
}