import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entity/user-entity';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [UserModule,ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name:'default',
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [
        UserEntity
      ],
      synchronize: true,
    })],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
