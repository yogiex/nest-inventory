import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot(),
        UserModule,
        JwtModule.register({
            secret: process.env.JWT_KEY,
            signOptions: {
              expiresIn: '12h'
            }
          })
    ],
    controllers:[AuthController],
    providers:[AuthService],
    exports:[AuthService, JwtModule]
})
export class AuthModule {}
