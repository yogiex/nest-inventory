import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from 'src/auth/dto/register-dto';
import logger from 'src/logger';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    ){}

    findAll(){
        return this.userRepo.find()
    }

    async findOne(id: number){
        const user = await this.userRepo.findBy({id:id})
        try {
            if(user) return user
        } catch (error) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'User Not Found'
            })
        }
    }

    async findByUsername(username:string){
        const user = await this.userRepo.findBy({name:username})
        try {
            if(user) return user
        } catch (error) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error:'User with this username not found'
            })
        }
    }

    async findByEmail(email:string){
        const user = await this.userRepo.findOne({where: {
            email:email
        }})
        try {
            if(user) return user
        } catch (error) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'User with this email not found'
            })
        }
    }
    async deleteUser(id:number){
        let user =  await this.userRepo.findOne({
            where: {
                id:id
            }
        })
        return this.userRepo.remove(user)
    }
    
    hash_password(plainPassword: string){
        const hash = bcrypt.hashSync(plainPassword,10)
        return hash
    }

    comparePassword(plainPassword:string, hashPassword:string){
        const valid = bcrypt.compareSync(plainPassword,hashPassword)
        return valid
    }

    async register(createUser: RegisterDTO){
        const userExist = await this.userRepo.findOne({
            where: {
                email:createUser.email
            }
        })
        if(userExist){
            throw new BadRequestException("user already exist")
            logger.warn('user with this email already exist, please use another email')
        }else {
            createUser.password = this.hash_password(createUser.password)
            return this.userRepo.save(createUser)
        }
        
    }
}
