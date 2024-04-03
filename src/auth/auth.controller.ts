import { Controller, HttpCode, Body ,Post } from '@nestjs/common';
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
        return this.authService.generateToken({id:user.id})
        logger.info('login post get request')
        
    }

    //Dev only
    @Post('register')
    @HttpCode(201)
    async register(@Body() registerUser: RegisterDTO){
        logger.info('register post get request')
        // return {msg:"hello"}
        return this.userService.register(registerUser)
    }
}
