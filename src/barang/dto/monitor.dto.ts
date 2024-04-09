import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";

export class MonitorDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nama_barang: string;

    @ApiProperty()
    created_at: Date

    @ApiProperty()
    barang_masuk: Date

    @ApiProperty()
    barang_keluar: Date;

    @ApiProperty()
    brand: string;

    @ApiProperty()
    ukuran: number;

    @ApiProperty()
    refresh_rate: string;
}

export class CreateMonitorDTO extends OmitType(MonitorDTO,['id','created_at']){}
export class UpdateMonitorDTO extends PartialType(MonitorDTO){}