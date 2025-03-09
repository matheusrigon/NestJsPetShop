import { Module } from '@nestjs/common';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { CustomerController } from 'src/modules/backoffice/controllers/customer.controller';
import { AddressService } from './services/address.service';
import { PetService } from './services/pet.service';
import { PetController } from './controllers/pet.controller';
import { AddressController } from './controllers/address.controller';
import {  customerProviders } from './providers/customer.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [
        DatabaseModule                  
    ],
    controllers: [
        CustomerController,
        AddressController,
        PetController
    ],
    providers:[
        AccountService, 
        CustomerService, 
        AddressService,
        PetService,
        ...customerProviders
              
    ]
})
export class BackofficeModule {}
