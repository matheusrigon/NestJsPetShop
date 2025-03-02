import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from 'src/modules/backoffice/contracts/customer/create-customer.contract';
import { CreateCustomerDto } from 'src/modules/backoffice/dtos/customer/create-customer.dto';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Result } from 'src/modules/backoffice/models/result.model';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { User } from 'src/modules/backoffice/models/user.model';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { QueryDto } from 'src/modules/backoffice/dtos/query.dto';
import { UpdateCustomerDto } from 'src/modules/backoffice/dtos/customer/update-customer.dto';
import { CreditCard } from 'src/modules/backoffice/models/credit-card.model';
import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
    constructor(
        private readonly accountService: AccountService,
        private readonly customerService: CustomerService,
    ){ }

    @Get('')
    async getAll(){
        const customers = await this.customerService.findAll();
        return new Result(null, true, customers, null);
    }   
    
    @Get(':document')
    async getByDocument(@Param('document') document: string){
        const customer = await this.customerService.find(document);
        return new Result(null, true, customer, null);
    }

    @Post('query')
    async query(@Body() model: QueryDto){
        const customers = await this.customerService.query(model);
        return new Result(null, true, customers, null);
    }


    @Post('')
    // @UseInterceptors(ClassSerializerInterceptor)
    // @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract))
    async post(@Body() model: CreateCustomerDto){
        try {
            const user = await this.accountService.create(new User(
                model.document,
                model.password, 
                true)
            );
    
            const customer = await this.customerService.create(
                new Customer(model.name, model.document, model.email, [], null, null, null, user)
            );
    
            return new Result('Customer created successfully!', true, customer, null);

        } catch (error) {
            throw new HttpException(new Result('Customer not created!', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':document')
    async update(@Param('document') document: string, @Body() model: UpdateCustomerDto){
        try {
            await this.customerService.update(document, model);

            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Customer not updated!', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Post(':document/credit-cards')
    async createBilling(@Param('document') document: string, @Body() model: CreditCard) {
        try {
            await this.customerService.saveOrUpdateCreditCard(document, model);
            
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível adicionar seu cartão de crédito', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    
}