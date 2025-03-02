import { SerializeOptions } from '@nestjs/common';
import { Address } from 'src/modules/backoffice/models/address.model';
import { CreditCard } from 'src/modules/backoffice/models/credit-card.model';
import { Pet } from 'src/modules/backoffice/models/pet.model';
import { User } from 'src/modules/backoffice/models/user.model';
import { Type } from 'class-transformer';
import {  
    IsEmail, 
    IsNotEmpty, 
    IsNumberString, 
    IsString, 
    MinLength, 
    ValidateNested 
} from 'class-validator';

@SerializeOptions({ type: Customer })
export class Customer {
    constructor(
        name: string,
        document: string,
        email: string,
        pets: Pet[],
        billingAddress: Address,
        shippingAddress: Address,
        creditCard: CreditCard,
        user: User
    ) {
        this.name = name;
        this.document = document;
        this.email = email;
        this.pets = pets;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.creditCard = creditCard;
        this.user = user;
    }    

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    public name: string;

    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    public document: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()  
    @Type(() => Pet)
    @ValidateNested()
    public pets: Pet[];

    @IsNotEmpty()  
    @Type(() => Address)
    @ValidateNested()
    public billingAddress: Address;
    
    @IsNotEmpty()  
    @Type(() => Address)
    @ValidateNested()
    public shippingAddress: Address;
    
    @IsNotEmpty()  
    @Type(() => CreditCard)
    @ValidateNested()
    public creditCard: CreditCard;

    @IsNotEmpty()  
    @Type(() => User)
    @ValidateNested()
    public user : User;
}