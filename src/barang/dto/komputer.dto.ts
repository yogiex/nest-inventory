import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";

export class KomputerDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    brand_case: string;

    @ApiProperty()
    processor: string;

    @ApiProperty()
    memory: string;

    @ApiProperty()
    vga: string;
}
export class CreateKomputerDTO extends OmitType(KomputerDTO,['id']){}
export class UpdateKomputerDTO extends PartialType(KomputerDTO){}