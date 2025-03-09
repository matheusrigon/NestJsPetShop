import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CUSTOMER_MODEL } from 'src/constants';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Pet } from 'src/modules/backoffice/models/pet.model';

@Injectable()
export class PetService{
    constructor(@Inject(CUSTOMER_MODEL) private readonly model: Model<Customer>)
    { }

    async create(document: string, data: Pet): Promise<Customer>{
        const options = { upsert: true, new: true };

        return await this.model.findOneAndUpdate({ document }, {
            $push: {
                pets: data
            }
        }, options);
    }

    async update(document: string, id: string, data: Pet): Promise<Customer>{
        return await this.model.findOneAndUpdate({ document, 'pets._id': id },
            {
                $set: {
                    'pets.$': data
                }
            }
        );           
    }   
}