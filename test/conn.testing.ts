import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { UserEntity } from "../src/user/entity/user-entity";


export class DatabaseConnectionServiceTesting implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'yogi',
            password: 'password_project',
            database: 'project_inventory',
            entities: [
              UserEntity
            ],
            synchronize: true,
        }
    }
}