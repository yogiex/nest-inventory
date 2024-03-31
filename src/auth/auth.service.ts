import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ){}

    async checkUser(){}

    generateToken(user: any){
        const payload = {id: user.id}
        const token = this.jwtService.sign(payload)
        return {
            token:token
        }
    }   
}
