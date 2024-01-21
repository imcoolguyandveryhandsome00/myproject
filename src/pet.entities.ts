import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";


export class PetBaseEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;
}




export class User extends PetBaseEntity {

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    address : string;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column()
    phone : string;

    @Column({default : false})
    is_admin : boolean;

    @OneToMany(()=>Pet,(pet)=>pet.owner)
    pets : []

}


export class Pet extends PetBaseEntity {

    @Column()
    name : string;

    @Column()
    price : number;

    @Column()
    type : string;

    @ManyToOne(() => User, (user)=>user.pets)
    owner : User;

    @Column()
    status : string

}



export class PurchaseOrder extends PetBaseEntity{

    @ManyToOne(() => User)
    purchase_user : User

    @ManyToOne(() => Pet)
    pet : Pet

    @Column()
    date : number;

    @Column()
    is_paid : boolean

    @Column()
    delivery_address : string
}
