import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Address } from 'src/modules/backoffice/models/address.model';
import { AddressType } from '../enums/address-type.enum';

@Injectable()
export class AddressService{
    constructor(@InjectModel('Customer') private readonly model: Model<Customer>){

    }
    
    async addAddress(document: string, data: Address, addressType: AddressType): Promise<Customer>{
        const options = { upsert: true };
        
        return await this.model.findOneAndUpdate({ document }, this.buildJson(addressType, data), options);
    }

    private buildJson(addressType: AddressType, data: Address): any{
        if (addressType == AddressType.Shipping){
            return {
                $set: {
                    shippingAddress: data
                }
            }
        }
        else if (addressType == AddressType.Billing){
            return {
                $set: {
                    billingAddress: data
                }
            }
        }        
        
        return ;
    }

}