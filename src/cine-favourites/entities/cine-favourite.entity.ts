import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity('cine-favourites')
export class CineFavourite {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    id: string;

    @Column()
    idUser: string

    @Column()
    moviesList: string
}
