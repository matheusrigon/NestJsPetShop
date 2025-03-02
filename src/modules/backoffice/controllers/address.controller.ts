import { Result } from 'src/modules/backoffice/models/result.model';
import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Param,
    Post    
} from '@nestjs/common';
import { Address } from 'src/modules/backoffice/models/address.model';
import { AddressService } from 'src/modules/backoffice/services/address.service';
import { AddressType } from 'src/modules/backoffice/enums/address-type.enum';

@Controller('v1/addresses')
export class AddressController {
    constructor(
        private readonly addressService: AddressService
    ){ }

    @Post(':document/billing')
    async addBillingAddress(@Param('document') document: string, @Body() model: Address){
        try {
            await this.addressService.addAddress(document, model, AddressType.Billing);             

            return new Result('Billing address created successfully!', true, model, null);

        } catch (error) {
            throw new HttpException(new Result('Billing address not created!', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Post(':document/shipping')
    async addShippingAddress(@Param('document') document: string, @Body() model: Address){
        try {
            await this.addressService.addAddress(document, model, AddressType.Shipping); 

            return new Result('Shipping address created successfully!', true, model, null);

        } catch (error) {
            throw new HttpException(new Result('Shipping address not created!', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}