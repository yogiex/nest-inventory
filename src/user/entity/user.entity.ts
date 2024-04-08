import { RuanganEntity } from '../../ruangan/entity/ruangan.entity';
import {PrimaryColumn, Column,CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    address: string;

    @Column()
    avatar: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    role: string;

    @OneToMany(() => RuanganEntity , ruangan => ruangan.id)
    setting_ruang: RuanganEntity[]
}
