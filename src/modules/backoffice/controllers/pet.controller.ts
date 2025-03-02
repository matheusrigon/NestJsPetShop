import { Result } from 'src/modules/backoffice/models/result.model';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { Pet } from 'src/modules/backoffice/models/pet.model';
import { PetService } from 'src/modules/backoffice/services/pet.service';

@Controller('v1/pets')
export class PetController {
    constructor(
        private readonly petService: PetService
    ){ }    

    @Post(':document')
    async addPet(@Param('document') document: string, @Body() model: Pet){
        try {
            await this.petService.create(document, model); 

            return new Result('Pet created successfully!', true, model, null);

        } catch (error) {
            throw new HttpException(new Result('Pet not created!', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':document/:id')
    async udpatePet(@Param('document') document: string, @Param('id') id: string, @Body() model: Pet){
        try {
            await this.petService.update(document, id, model); 

            return new Result('Pet updated successfully!', true, model, null);

        } catch (error) {
            throw new HttpException(new Result('Pet not updated!', false, null, error), HttpStatus.BAD_REQUEST);
        }        
    }
}