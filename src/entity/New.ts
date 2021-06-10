import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class New {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}
