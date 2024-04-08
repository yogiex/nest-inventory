import { UserEntity } from "../../user/entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RuanganEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama_ruangan: string;

    @Column()
    nomer_meja: number;

    @ManyToOne(() => UserEntity, user => user.setting_ruang, {nullable: true})
    assign_by: UserEntity | null
}