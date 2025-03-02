import { 
    IsNotEmpty, 
    IsString, 
    MinLength 
} from "class-validator";

export class UpdateCustomerDto {
    constructor(
        name: string,

    ){
        name = this.name;
    } 

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    public name: string;
}