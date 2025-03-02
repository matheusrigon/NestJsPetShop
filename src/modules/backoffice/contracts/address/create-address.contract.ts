import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { Address } from 'src/modules/backoffice/models/address.model';

@Injectable()
export class CreateAddressContract implements Contract {
    errors: any[];

    validate(model: Address): boolean {
        const validator = new Validator();

        validator.isZipCode(model.zipCode, `Invalid ZIP Code!`);
        validator.hasMinLen(model.street, 3, `Invalid street! At least 3 characters are required`);
        validator.isNumber(model.number, `Invalid number! Only numbers are accepted!`);
        validator.hasMinLen(model.neighborhood, 3, `Invalid neighborhood! At least 3 characters are required`);
        validator.isNotNull(model.city, `Invalid city! City is required!`);
        validator.hasMinLen(model.state, 2, `Invalid state! State is required!`);
        validator.hasMinLen(model.country, 2, `Invalid country! Country is required!`);

        this.errors = validator.errors;
        return validator.isValid();
    }
}