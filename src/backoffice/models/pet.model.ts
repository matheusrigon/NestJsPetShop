import { IsNotEmpty, IsString } from "class-validator";

export class Pet {
    constructor(
        name: string,
        gender: string,
        kind: string,
        breed: string
    ){
        this.name = name,
        this.gender = gender,
        this.kind = kind,
        this.breed = breed
    }

    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    public gender: string;

    @IsString()
    @IsNotEmpty()
    public kind: string;

    @IsString()
    @IsNotEmpty()
    public breed: string;

}