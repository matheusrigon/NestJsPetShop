import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/backoffice/schemas/user.schema';
import { CustomerSchema } from 'src/modules/backoffice/schemas/customer.schema';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { CustomerController } from 'src/modules/backoffice/controllers/customer.controller';
import { AddressService } from './services/address.service';
import { PetService } from './services/pet.service';
import { PetController } from './controllers/pet.controller';
import { AddressController } from './controllers/address.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Customer',
                schema: CustomerSchema
            },        
            {
                name: 'User',
                schema: UserSchema
            }
        ])
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
        PetService
    ]
})
export class BackofficeModule {}
