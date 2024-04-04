import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user-entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RuanganEntity } from 'src/barang/entity/ruangan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RuanganEntity])],
  providers: [UserService],
  exports:[UserService],
  controllers: [UserController]
})
export class UserModule {}
