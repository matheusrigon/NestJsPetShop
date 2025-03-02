import { 
    IsCreditCard, 
    IsNotEmpty, 
    IsString, 
    MinLength 
} from "class-validator";

export class CreditCard {
    constructor(
        holder: string,
        number: string,
        expiration: string
    ){
        this.holder = holder;
        this.number = number;
        this.expiration = expiration;
    }

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    public holder: string;

    @IsNotEmpty()
    @IsString()
    @IsCreditCard()
    public number: string;

    @IsNotEmpty()
    @IsString()
    public expiration: string;
}