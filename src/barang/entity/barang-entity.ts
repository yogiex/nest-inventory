import {Column,CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { MonitorEntity } from './monitor.entity';
import { KomputerEntity } from './komputer.entity';

@Entity('Barang')
export class BarangEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nama_barang: string;

    @CreateDateColumn()
    created_at: Date

    @Column({type: 'date'})
    barang_masuk: Date

    @Column({type: 'date'})
    barang_keluar: Date;

    @OneToMany(() => MonitorEntity, monitor => monitor.id)
    monitor: MonitorEntity[]

    @OneToMany(() => KomputerEntity, komputer => komputer.id)
    komputer: KomputerEntity[]

}