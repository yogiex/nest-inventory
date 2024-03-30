import {PrimaryColumn, Column,CreateDateColumn, Entity, ManyToMany} from 'typeorm'
import { BarangEntity } from './barang-entity';

@Entity('Monitors')
export class MonitorEntity{
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

    @Column()
    brand: string;

    @Column()
    ukuran: number;

    @Column()
    refresh_rate: string;
    
    @ManyToMany(() => BarangEntity)
    inventory: BarangEntity[]
    
}