import {PrimaryColumn, Column,CreateDateColumn, Entity, ManyToMany} from 'typeorm'
import { MonitorEntity } from './monitor-entity';

@Entity('Barang')
export class BarangEntity{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    nama_barang: string;

    @CreateDateColumn()
    created_at: Date

    @Column({type: 'date'})
    barang_masuk: Date

    @Column({type: 'date'})
    barang_keluar: Date;

}