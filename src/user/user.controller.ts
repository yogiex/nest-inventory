import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    findAll(){}

    @Get(':id')
    findOne(){}

    @Post('user')
    createUser(){}

    @Patch(':id')
    updateUser(){}

    @Delete(':id')
    deleteUser(){}

}
