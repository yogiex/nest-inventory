import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BarangController } from './barang.controller';
import { BarangService } from './barang.service';
import { BarangEntity } from './entity/barang-entity';
import { MonitorEntity } from './entity/monitor-entity';
import { KomputerEntity } from './entity/komputer-entity';

@Module({
  imports: [TypeOrmModule.forFeature([BarangEntity, MonitorEntity, KomputerEntity])],
  controllers: [BarangController, ],
  providers: [BarangService],
  exports: [BarangService]
})
export class BarangModule {}
