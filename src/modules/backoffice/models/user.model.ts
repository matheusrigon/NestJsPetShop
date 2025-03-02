import { SerializeOptions } from '@nestjs/common';

@SerializeOptions({ type: User })
export class User{

    constructor(
        userName: string, 
        password: string, 
        active: boolean
    ){
        this.userName = userName;
        this.password = password;
        this.active = active;
    }


    public userName: string;


    public password: string;


    public active: boolean;
}