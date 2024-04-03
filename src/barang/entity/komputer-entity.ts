import {Column,CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { BarangEntity } from './barang-entity';

@Entity('Computers')
export class KomputerEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    brand: string;

    @Column()
    processor: string;

    @Column()
    memory: string;

    @Column()
    vga: string;

    @ManyToOne(() => BarangEntity, barang => barang.komputer)
    inventory: BarangEntity

    
}