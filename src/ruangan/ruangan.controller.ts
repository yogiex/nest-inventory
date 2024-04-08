import { Controller } from '@nestjs/common';
import { RuanganService } from './ruangan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ruangan')
@Controller('ruangan')
export class RuanganController {
    constructor(
        private ruanganService: RuanganService
    ){}

    showRuangan(){
        return this.ruanganService.showRuangan()
    }
    showOneRuangan(){
        return this.ruanganService.showOneRuangan()
    }
    addRuangan(){
        return this.ruanganService.addRuangan()
    }
    editRuangan(){
        return this.ruanganService.editRuangan()
    }
    removeRuangan(){
        return this.ruanganService.removeRuangan()
    }
}
