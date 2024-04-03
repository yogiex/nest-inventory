import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user-entity';
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

    findOne(id: string){
        return this.userRepo.findBy({id:id})
    }

    findByUsername(username:string){
        return this.userRepo.findBy({name:username})
    }

    async findByEmail(email:string){
        return this.userRepo.findOne({where: {
            email:email
        }})
    }
    async deleteUser(id:string){
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
