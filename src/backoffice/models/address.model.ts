import { IsNotEmpty, IsOptional, IsPostalCode, IsString } from "class-validator";

export class Address {
    constructor(
        zipCode: string,
        street: string,
        number: string,
        complement: string,
        neighborhood: string,
        city: string,
        state: string,
        country: string
    ){
        zipCode = this.zipCode;
        street = this.street;
        number = this.number;
        complement = this.complement;
        neighborhood = this.neighborhood;
        city = this.city;
        state = this.state;
        country = this.country;
    }

    @IsNotEmpty()
    @IsString()
    @IsPostalCode('BR')
    public zipCode: string;

    @IsNotEmpty()
    @IsString()
    public street: string;

    @IsNotEmpty()
    @IsString()    
    public number: string;

    @IsOptional()
    @IsString()
    public complement: string;

    @IsNotEmpty()
    @IsString()
    public neighborhood: string;

    @IsNotEmpty()
    @IsString()
    public city: string;

    @IsNotEmpty()
    @IsString()
    public state: string;

    @IsNotEmpty()
    @IsString()
    public country: string;
}