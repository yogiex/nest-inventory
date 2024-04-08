import { DataSource } from "typeorm"
import { UserEntity } from "../src/user/entity/user.entity";
import { ConfigModule } from '@nestjs/config';



    const AppDataSource = new DataSource({
        type: "postgres",
        host: 'localhost',
        port: 5432,
        username: 'yogi',
        password: 'password_project',
        database: 'project_inventory',
    })
export default {
    AppDataSource
}