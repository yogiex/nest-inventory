import {PrimaryColumn, Column,CreateDateColumn} from 'typeorm'
export class UserEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
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
}
