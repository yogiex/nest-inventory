import { Controller, HttpCode, Body ,Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {

    @Post('login')
    @HttpCode(200)
    async login(@Body() auth: any){
        return null;
    }
}
