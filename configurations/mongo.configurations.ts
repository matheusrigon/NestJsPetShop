import { registerAs } from "@nestjs/config";
import { MONGO_CONFIG } from "src/constants";

export interface IMongoConfig{
    connectionString: string;
}

export default registerAs(MONGO_CONFIG, ():IMongoConfig  => ({
     connectionString: process.env.MONGO_CONNECTION_STRING       
    })
);

