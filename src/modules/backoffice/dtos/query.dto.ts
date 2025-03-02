import { 
    IsNotEmpty, 
    IsNumber, 
    IsObject, 
    IsOptional, 
    IsString, 
    Max, 
    Min 
} from "class-validator";

export class QueryDto {
    constructor(
        query: any,
        fields: string,
        sort: string,
        skip: number = 0,
        take: number = 25
    ){
        this.query = query,
        this.fields = fields,
        this.sort = sort,
        this.skip = skip,
        this.take = take
    }

    @IsObject()
    @IsOptional()
    public query: any = {};

    @IsString()
    @IsOptional()
    public fields: string;

    @IsString()
    @IsNotEmpty()
    public sort: string;

    @Min(0)
    @IsNumber()
    @IsOptional()
    public skip: number = 0;

    @Min(1)
    @Max(500)
    @IsNumber()
    @IsOptional()
    public take: number = 25;
}