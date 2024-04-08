import { Module } from '@nestjs/common';
import { RuanganController } from './ruangan.controller';
import { RuanganService } from './ruangan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuanganEntity } from './entity/ruangan.entity';
import { UserEntity } from 'src/user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RuanganEntity, UserEntity])],
  controllers: [RuanganController],
  providers: [RuanganService]
})
export class RuanganModule {}
