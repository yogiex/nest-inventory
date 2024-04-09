import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import logger from 'src/logger';
import { BarangService } from './barang.service';
import { AuthUser } from 'src/decorator/user.decorator';
import { CreateMonitorDTO } from './dto/monitor.dto';
import { CreateKomputerDTO } from './dto/komputer.dto';

@UseGuards(JwtGuard)
@Controller('barang')
export class BarangController {
    constructor(
        private barangService: BarangService
    ){}
    @Get('/monitor')
    showAllMonitor(){
        logger.info('show all monitor')
        return this.barangService.showAllMonitor()
    }
    @Get('/komputer')
    showAllKomputer(){
        logger.info('show all komputer')
        return this.barangService.showAllKomputer()
    }
    @Get('/monitor/:id')
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
    @Get('/komputer/:id')
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

    @Post('/monitor')
    insertMonitor(@AuthUser() user:number, @Body() insertMonitor: CreateMonitorDTO){
        try {
            logger.info({
                data: insertMonitor,
                authUser: user
            })
            return this.barangService.addMonitor(insertMonitor)
        } catch (error) {
            logger.warn({
                msg:"Bad Request",
                status: HttpStatus.BAD_REQUEST
            })
            throw new BadRequestException('cannot insert monitor')
        }
    }
    @Post('/komputer')
    insertKomputer(@AuthUser() user:number, @Body() insertKomputer: CreateKomputerDTO){
        try {
            logger.info({
                data: insertKomputer,
                auth: user 
            })
            return this.barangService.addKomputer(insertKomputer)
        } catch (error) {
            logger.warn({
                msg:'Bad request',
                status: HttpStatus.BAD_REQUEST
            })
            throw new BadRequestException('cannot insert komputer')
        }
    }
    @Put('/monitor/:id')
    editMonitor(){}
    @Put('/komputer/:id')
    editKomputer(){}
    @Delete('/monitor/:id')
    async deleteMonitor(@Param() id:number){
        try {
            const monitor = await this.barangService.findByidMonitor(id)
            if(monitor) {
                logger.info({
                    data: monitor
                })
            return this.barangService.deleteMonitor(id)
            } 
        } catch (error) {
            logger.warn({
                status: HttpStatus.NOT_FOUND,
                msg: 'Id Not Found'
            })
            throw new NotFoundException('id not found')
        }
    }
    @Delete('/komputer/:id')
    async deleteKomputer(@Param() id:number){
        try {
            const komputer = await this.barangService.findByidKomputer(id)
            if(komputer) {
                logger.info({
                    data: komputer
                })
                return this.barangService.deleteKomputer(id)
            }
        } catch (error) {
            logger.warn({
                status: HttpStatus.NOT_FOUND,
                msg: 'Id not found'
            })
            throw new NotFoundException('id not found')
        }
    }
}
