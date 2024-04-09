import { DataSource } from "typeorm"
import { UserEntity } from "../src/user/entity/user.entity";
import { RuanganEntity } from "../src/ruangan/entity/ruangan.entity";

const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'yogi',
    password: 'password_project',
    database: 'project_inventory',
    entities: [UserEntity,RuanganEntity],
    // synchronize: true
  });

export default dataSource
