import { Controller, HttpCode, Body ,Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from 'src/app.service';
import { UserService } from 'src/user/user.service';
@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService
    ){}
    @Post('login')
    @HttpCode(200)
    async login(@Body() auth: any){
        return null;
    }

    //Dev only
    @Post('register')
    @HttpCode(200)
    async register(@Body() createUser: any){
        return this.userService.register(createUser)
    }
}
