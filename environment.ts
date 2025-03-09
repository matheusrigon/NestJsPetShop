declare global {
    namespace NodeJS {
      interface ProcessEnv {
        //app
        PORT?: string;
        NODE_ENV: 'dev' | 'prod';

        //mongo
        sMONGO_CONNECTION_STRING: string;

        //sql
        MSSQL_TYPE: 'mssql';
        MSSQL_HOST: string;
        MSSQL_PORT: string;
        MSSQL_USERNAME: string;
        MSSQL_PASSWORD: string;
        MSSQL_DATABASE: string;
        MSSQL_SYNCHRONIZE: string
      }
    }
  }
  export {}