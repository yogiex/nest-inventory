import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('barang')
export class BarangController {
    @Get()
    showAllMonitor(){}
    @Get()
    showAllKomputer(){}
    @Get(':id')
    findOneMonitor(){}
    @Get(':id')
    findOneKomputer(){}
    @Post()
    insertMonitor(){}
    @Post()
    insertKomputer(){}
    @Put(':id')
    editMonitor(){}
    @Put(':id')
    editKomputer(){}
    @Delete(':id')
    deleteMonitor(){}
    @Delete(':id')
    deleteKomputer(){}
}
