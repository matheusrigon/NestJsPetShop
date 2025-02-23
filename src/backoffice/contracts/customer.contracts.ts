import { Injectable } from '@nestjs/common';
import { Customer } from '../models/customer.models';
import { Validator } from '../../utils/validator';
import { Contract } from './contract';
import { Address } from '../models/address.model';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: Customer): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.name, 5, 'Inválid name! At least 5 characters are required');
        validator.isEmail(model.email, 'Inválid e-mail!');
        validator.isFixedLen(model.document, 11, 'Inválid CPF!');

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
        validator.isZipCode(model.zipCode, `Inválid ${addressType} ZIP Code!`);
        validator.hasMinLen(model.street, 3, `Inválid ${addressType} street! At least 3 characters are required`);
        validator.isNumber(model.number, `Inválid ${addressType} number! Only numbers are accepted!`);
        validator.hasMinLen(model.neighborhood, 3, `Inválid ${addressType} neighborhood! At least 3 characters are required`);
        validator.isNotNull(model.city, `Inválid ${addressType} city! City is required!`);
        validator.hasMinLen(model.state, 2, `Inválid ${addressType} state! State is required!`);
        validator.hasMinLen(model.country, 2, `Inválid ${addressType} country! Country is required!`);
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