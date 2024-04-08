import { Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import logger from 'src/logger';
import { BarangService } from './barang.service';

@UseGuards(JwtGuard)
@Controller('barang')
export class BarangController {
    constructor(
        private barangService: BarangService
    ){}
    @Get()
    showAllMonitor(){
        logger.info('show all monitor')
        return this.barangService.showAllMonitor()
    }
    @Get()
    showAllKomputer(){
        logger.info('show all komputer')
        return this.barangService.showAllKomputer()
    }
    @Get(':id')
    async findOneMonitor(@Param() id:number){
        const monitor = await this.barangService.findByidMonitor(id)
        try {
            logger.info(`find one monitor with id ${id}`)
            if(monitor) return monitor
        } catch (error) {
            logger.warn({
                status: HttpStatus.NOT_FOUND,
                msg: 'item not found'
            })
            throw new NotFoundException('item not found')
        }
    }
    @Get(':id')
    findOneKomputer(@Param() id:number){
        const komputer = this.barangService.findByidKomputer(id)
        try {
            logger.info(`find one komputer with id ${id}`)
            if(komputer) return komputer
        } catch (error) {
            logger.warn({
                status: HttpStatus.NOT_FOUND,
                msg: 'item not found'
            })
            throw new NotFoundException('item not found')
        }
    }
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
