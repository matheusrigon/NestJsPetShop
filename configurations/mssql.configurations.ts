import { registerAs } from "@nestjs/config";
import { MSSQL_CONFIG } from "src/constants";

export interface IMssqlConfig{
    type: 'mssql';
    host: string;
    port: number;
    userName: string;
    password: string;
    database: string;
    synchronize: boolean;
    entities: IMssqlConfigEntities[];
    options: IMssqlConfigOptions;
}

interface IMssqlConfigEntities{
    path: string;
}

interface IMssqlConfigOptions{
    encrypt: boolean;
}

export default registerAs(MSSQL_CONFIG, ():IMssqlConfig  => ({
            type: process.env.MSSQL_TYPE,
            host: process.env.MSSQL_HOST,
            port: Number(process.env.MSSQL_PORT),
            userName: process.env.MSSQL_USERNAME,
            password: process.env.MSSQL_PASSWORD,
            database: process.env.MSSQL_DATABASE,
            synchronize: Boolean(process.env.MSSQL_SYNCHRONIZE),
            entities:[{
            path:  '/../**/*.entity{.ts,.js}'
            }
            ],
            options: {
            encrypt: false
            }
        }
    )
);

