import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { BarangModule } from './barang/barang.module';
import { BarangEntity } from './barang/entity/barang-entity';
import { KomputerEntity } from './barang/entity/komputer.entity';
import { MonitorEntity } from './barang/entity/monitor.entity';
import { RuanganModule } from './ruangan/ruangan.module';
import { RuanganEntity } from './ruangan/entity/ruangan.entity';

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
        UserEntity,
        KomputerEntity,
        MonitorEntity,
        BarangEntity,
        RuanganEntity
      ],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    BarangModule,
    RuanganModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
