import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MonitorEntity } from './entity/monitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { KomputerEntity } from './entity/komputer.entity';
import logger from 'src/logger';

@Injectable()
export class BarangService {
    constructor(
        @InjectRepository(MonitorEntity) private monitorRepository: Repository<MonitorEntity> ,
        @InjectRepository(KomputerEntity) private komputerRepository: Repository<KomputerEntity>
    ){}

    showAllMonitor(){
        return this.monitorRepository.find();
    }
    showAllKomputer(){
        return this.komputerRepository.find()
    }
    async findByidMonitor(id:number){
        const monitor = await this.monitorRepository.findOne({
            where: {id:id}
        }) 
        try {
            if(monitor) return monitor
        } catch (error) {
            logger.warn({
                msg: 'Item Not Found',
                status: HttpStatus.NOT_FOUND
            })
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'Item Not Found'
            })
        }
    }
    async findByidKomputer(id:number){
        const komputer = await this.monitorRepository.findOne({
            where: {
                id:id
            }
        })
        try {
            if(komputer) return komputer
        } catch (error) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'Item Not Found'
            })
        }
    }
    addMonitor(){}
    addKomputer(){}

    updateMonitor(){}
    updateKomputer(){}
    async deleteMonitor(id:number){
        const monitor = await this.monitorRepository.findOne({
            where: {
                id:id
            }
        })
        try {
            if(monitor) {
                return this.monitorRepository.remove(monitor)
            }
        } catch (error) {
            throw new BadRequestException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Bad Request'
            })
        }
    }
    async deleteKomputer(id:number){
        const komputer = await this.komputerRepository.findOne({
            where: {
                id:id 
            }
        })
        try {
            
        } catch (error) {
            throw new BadRequestException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Bad Request'
            })
        }
    }
}
