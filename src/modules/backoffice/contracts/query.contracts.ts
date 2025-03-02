import { Injectable } from '@nestjs/common';
import { Validator } from 'src/utils/validator';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { QueryDto } from 'src/modules/backoffice/dtos/query.dto';

@Injectable()
export class QueryContract implements Contract {
    errors: any[];

    validate(model: QueryDto): boolean {
        const validator = new Validator();

        if (!model.query)
            model.query = {};

        validator.isGreaterThan(model.take, 1000, 'Sua query não pode retornar mais que 1000 registros');

        this.errors = validator.errors;
        return validator.isValid();
    }
}