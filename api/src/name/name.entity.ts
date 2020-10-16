import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Name {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string
}