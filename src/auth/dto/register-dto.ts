import { ApiProperty, PickType } from "@nestjs/swagger";

export class RegisterDTO {
    id?: string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    name:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    role:string;
    @ApiProperty()
    address:string;
    @ApiProperty()
    avatar:string;
}

export class LoginDTO extends PickType(RegisterDTO,['email','password']){}