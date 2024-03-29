import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user-entity';
import * as bcrypt from 'bcrypt';
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

    async deleteUser(id:string){
        //let user =  this.userRepo.findOne(id)
        //return this.userRepo.remove()
    }
    
}
