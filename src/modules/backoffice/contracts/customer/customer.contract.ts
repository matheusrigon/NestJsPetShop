import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { User } from 'src/modules/backoffice/models/user.model';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { Address } from 'src/modules/backoffice/models/address.model';
import { Pet } from 'src/modules/backoffice/models/pet.model';


@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: Customer): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.name, 5, 'Invalid name! At least 5 characters are required');
        validator.isEmail(model.email, 'Invalid e-mail!');
        validator.isFixedLen(model.document, 11, 'Invalid CPF!');

        validator.isRequired(model.user, `Customer ${Object.keys(model.user)[0]} is required!`);
        if (model.user != null) this.validateUser(model.user, validator);
        
        validator.isRequired(model.billingAddress, 'Billing address is required!');
        this.validateAdrress(model.billingAddress, validator, 'billing');
        
        validator.isRequired(model.shippingAddress, 'Shipping address is required!');
        this.validateAdrress(model.shippingAddress, validator, 'shipping');
        
        validator.isRequired(model.pets, 'At least one pet is required!');
        this.errors = validator.errors;
        return validator.isValid();
    }

    validateAdrress(model: Address, validator: Validator, addressType: string) {
        validator.isZipCode(model.zipCode, `Invalid ${addressType} ZIP Code!`);
        validator.hasMinLen(model.street, 3, `Invalid ${addressType} street! At least 3 characters are required`);
        validator.isNumber(model.number, `Invalid ${addressType} number! Only numbers are accepted!`);
        validator.hasMinLen(model.neighborhood, 3, `Invalid ${addressType} neighborhood! At least 3 characters are required`);
        validator.isNotNull(model.city, `Invalid ${addressType} city! City is required!`);
        validator.hasMinLen(model.state, 2, `Invalid ${addressType} state! State is required!`);
        validator.hasMinLen(model.country, 2, `Invalid ${addressType} country! Country is required!`);
    }

    validatePet(model: Pet, validator: Validator) {
        validator.isRequired(model.name, 'Pet name is required!');
        validator.isRequired(model.gender, 'Pet gender is required!');
        validator.isRequired(model.kind, 'Pet kind is required!');
        validator.isRequired(model.breed, 'Pet breed is required!');
    }

    validateUser(model: User, validator: Validator){
        validator.hasMinLen(model.password, 6, 'User password too short! At least 6 characters are required!');
        validator.hasMinLen(model.userName, 6, 'User userName too short! At least 6 characters are required!');
    }
}