import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { UpdateCustomerDto } from 'src/modules/backoffice/dtos/customer/update-customer.dto';

@Injectable()
export class UpdateCustomerContract implements Contract {
    errors: any[];

    validate(model: UpdateCustomerDto): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.name, 5, 'Invalid name! At least 5 characters are required');

        this.errors = validator.errors;
        return validator.isValid();
    }
}