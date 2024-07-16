import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

Entity('shop-cart')
export class ShopCart {

    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    id: string;

    @Column()
    idUser: string

    @Column()
    elements: string[]
}
