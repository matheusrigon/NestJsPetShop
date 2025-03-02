import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { Pet } from 'src//modules/backoffice/models/pet.model';

@Injectable()
export class CreatePetContract implements Contract {
    errors: any[];

    validate(model: Pet): boolean {
        const validator = new Validator();

        validator.isRequired(model.name, 'Pet name is required!');
        validator.isRequired(model.gender, 'Pet gender is required!');
        validator.isRequired(model.kind, 'Pet kind is required!');
        validator.isRequired(model.breed, 'Pet breed is required!');

        this.errors = validator.errors;
        return validator.isValid();
    }
}