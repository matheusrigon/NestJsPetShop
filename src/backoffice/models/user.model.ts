import { IsNotEmpty, IsBoolean, IsStrongPassword, IsString, IsOptional } from 'class-validator';
import { SerializeOptions } from '@nestjs/common';

@SerializeOptions({ type: User })
export class User{

    @IsNotEmpty()
    @IsString()
    public userName: string;

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

    @IsOptional()
    @IsBoolean()
    public active: boolean;
}