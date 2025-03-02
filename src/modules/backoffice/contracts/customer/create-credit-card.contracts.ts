import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { CreditCard } from 'src/modules/backoffice/models/credit-card.model';

@Injectable()
export class CreateCreditCardContract implements Contract {
    errors: any[];

    validate(model: CreditCard): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.holder, 5, 'Invalid credit card!');
        validator.isFixedLen(model.number, 16, 'Invalid credit card number!');
        validator.isFixedLen(model.expiration, 4, 'Invalid expiration data!');

        this.errors = validator.errors;
        return validator.isValid();
    }
}