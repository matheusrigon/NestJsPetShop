import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from 'src/constants';
import { User } from 'src/modules/backoffice/models/user.model';

@Injectable()
export class AccountService{    
    constructor(@Inject(USER_MODEL) private readonly model: Model<User>)
    { }

    async create(data: User): Promise<User>{
        const user = new this.model(data);
        return await user.save();
    }
}