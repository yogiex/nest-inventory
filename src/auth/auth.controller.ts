import { Controller, HttpCode, Body ,Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from 'src/app.service';
import { UserService } from 'src/user/user.service';
import logger from 'src/logger';
import { LoginDTO } from './dto/login-dto';
import { RegisterDTO } from './dto/register-dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService
    ){}
    @Post('login')
    @HttpCode(200)
    async login(@Body() auth: LoginDTO){
        logger.info('login post get request')
        return null;
    }

    //Dev only
    @Post('register')
    @HttpCode(200)
    async register(@Body() registerUser: RegisterDTO){
        logger.info('register post get request')
        return this.userService.register(registerUser)
    }
}
