import { MSSQL_CONFIG, MSSQL_PROVIDER } from 'src/constants';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { IMssqlConfig } from 'configurations/mssql.configurations';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MssqlDatabaseProvider{
    private mssqlConfig: IMssqlConfig;

    constructor(private readonly configService: ConfigService)
    {
       this.mssqlConfig = this.configService.get<IMssqlConfig>(MSSQL_CONFIG);
    }
    
    MssqlProvider() {
        return [
          {
            provide: MSSQL_PROVIDER,
            useFactory: async () => {
              const dataSource = new DataSource({
                type: this.mssqlConfig.type,
                host: this.mssqlConfig.host,
                port: this.mssqlConfig.port,
                username: this.mssqlConfig.userName,
                password: this.mssqlConfig.password,
                database: this.mssqlConfig.database,
                entities: [
                  __dirname + this.mssqlConfig.entities[0].path,
                ],
                synchronize: this.mssqlConfig.synchronize,
                options: { 
                  encrypt: this.mssqlConfig.options.encrypt 
                }
              });
        
              return dataSource.initialize();
            },
          }
        ]
    }
    
}
