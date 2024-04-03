import { ApiProperty, PickType } from "@nestjs/swagger";

export class RegisterDTO {
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
}