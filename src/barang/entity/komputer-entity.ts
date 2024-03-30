import {PrimaryColumn, Column,CreateDateColumn, Entity, ManyToMany} from 'typeorm'
import { BarangEntity } from './barang-entity';

@Entity('Computers')
export class KomputerEntity{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    brand: string;

    @Column()
    processor: string;

    @Column()
    memory: string;

    @Column()
    vga: string;

    @ManyToMany(() => BarangEntity)
    inventory: BarangEntity[]


    
}