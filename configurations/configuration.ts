export default () => ({
    app:{
      port: process.env.PORT || 3000,
    },

    mongo: {
      connectionString: process.env.MONGO_CONNECTION_STRING,
    },
    //rever path e encrypt 
    mssql: {
      type: process.env.MSSQL_TYPE,
      host: process.env.MSSQL_HOST,
      port: Number(process.env.MSSQL_PORT),
      username: process.env.MSSQL_USERNAME,
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
});
