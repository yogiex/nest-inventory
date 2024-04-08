import { Controller, HttpCode, Body ,Post, BadRequestException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from 'src/app.service';
import { UserService } from 'src/user/user.service';
import logger from 'src/logger';
import { LoginDTO } from './dto/login-dto';
import { RegisterDTO } from './dto/register-dto';
import { AuthService } from './auth.service';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ){}

    @Post('login')
    @HttpCode(200)
    async login(@Body() auth: LoginDTO){
        let user = await this.authService.checkUser(auth.email, auth.password)
        const token = this.authService.generateToken({id:user.id})
        logger.info({
            msg: 'login post get request',
            user: user,
            token: token 
        })
        return token
        
        
    }

    //Dev only
    @Post('register')
    @HttpCode(201)
    async register(@Body() registerUser: any){
        logger.info('register post get request')
        const user = await this.userService.findByEmail(registerUser.email)
        if(user) {
            logger.warn(`user with this email ${registerUser.email} already registered`)
            throw new BadRequestException("user with this email already exist")
        } else {
            logger.info({
                msg: "user successful register",
                data: registerUser,
            })
            return this.userService.register(registerUser)
        }
        // return this.userService.register(registerUser)
    }
}
