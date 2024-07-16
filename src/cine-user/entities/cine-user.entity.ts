import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity('cine-user')
export class CineUser {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    id: string;

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    lastname: string

    @Column()
    firstname: string
}
