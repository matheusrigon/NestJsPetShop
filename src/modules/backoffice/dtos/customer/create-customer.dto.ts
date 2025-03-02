import { 
    IsNotEmpty, 
    IsNumberString, 
    IsString, 
    IsStrongPassword, 
    MinLength 
} from "class-validator";

export class CreateCustomerDto {
    constructor(
        name: string,
        document: string,
        email: string,
        password: string
    ){
        name = this.name;
        document = this.document;
        email = this.email;
        password = this.password;
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
    public email: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword({
        minLength:6, 
        minUppercase:0, 
        minLowercase:0, 
        minSymbols:0, 
        minNumbers:0 
    }, 
    {message: `password too short! At least 6 characters are required!`})
    public password: string;
}