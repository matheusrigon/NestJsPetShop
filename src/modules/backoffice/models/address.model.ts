import { 
    IsNotEmpty, 
    IsOptional, 
    IsPostalCode, 
    IsString 
} from "class-validator";

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
        this.zipCode = zipCode;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.country = country;
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