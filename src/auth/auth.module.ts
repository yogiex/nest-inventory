import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: process.env.JWT_KEY,
            signOptions: {
              expiresIn: '12h'
            }
          })
    ]
})
export class AuthModule {}
