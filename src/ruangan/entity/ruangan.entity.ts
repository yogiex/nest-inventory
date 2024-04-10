import { MonitorEntity } from "src/barang/entity/monitor.entity";
import { UserEntity } from "../../user/entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { KomputerEntity } from "src/barang/entity/komputer.entity";

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

    @OneToOne(() => MonitorEntity, monitor => monitor.id)
    monitor:number;

    @OneToOne(() => KomputerEntity, komputer => komputer.id)
    komputer: number;
}