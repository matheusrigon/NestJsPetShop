import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { CreateCustomerDto } from 'src/modules/backoffice/dtos/customer/create-customer.dto';

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: CreateCustomerDto): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.name, 5, 'Invalid name! At least 5 characters are required');
        validator.isEmail(model.email, 'Invalid e-mail!');
        validator.isFixedLen(model.document, 11, 'Invalid CPF!');
        validator.hasMinLen(model.password, 6, 'User password too short! At least 6 characters are required!');

        this.errors = validator.errors;
        return validator.isValid();
    }
}