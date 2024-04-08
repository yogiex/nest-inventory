import {PrimaryColumn, Column,CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { BarangEntity } from './barang-entity';

@Entity('Monitors')
export class MonitorEntity{
    @PrimaryGeneratedColumn()
    id: number;

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
    
    @ManyToOne(() => BarangEntity, barang => barang.monitor, {nullable: true})
    inventory: BarangEntity | null
    
}