import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { exceptions } from 'winston';
import logger from 'src/logger';
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ){}

    async checkUser(email,password){
        let user = await this.userService.findByEmail(email)
        if(user){
            const passwordValid = this.userService.comparePassword(password,user.password)
            if(passwordValid) {
                return user
            } else {
                throw new BadRequestException("invalid credentials")
                logger.warning("invalid credentials login email or password")
            }
        } else {
            throw new BadRequestException({
                msg: "email not found"
            })
        }
    }

    generateToken(user: any){
        const payload = {id: user.id}
        const token = this.jwtService.sign(payload)
        return {
            token:token
        }
    }   
}
