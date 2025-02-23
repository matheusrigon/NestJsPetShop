import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';
import { User } from './user.model';
import { Type } from 'class-transformer';
import { SerializeOptions } from '@nestjs/common';
import {  IsEmail, IsNotEmpty, IsNumberString, IsString, MinLength, ValidateNested } from 'class-validator';

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
        name = this.name;
        document: this.document;
        email: this.email;
        pets: this.pets;
        billingAddress: this.billingAddress;
        shippingAddress: this.shippingAddress;
        creditCard: this.creditCard;
        user: this.user;
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