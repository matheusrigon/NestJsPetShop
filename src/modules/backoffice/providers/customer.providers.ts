import { Connection } from "mongoose";
import { CustomerSchema } from "../schemas/customer.schema";
import { CUSTOMER_MODEL, MONGO_PROVIDER, USER_MODEL } from "src/constants";

export const customerProviders = [{
    provide: CUSTOMER_MODEL,
    useFactory: (connection: Connection) => connection.model('Customer', CustomerSchema),
    inject: [MONGO_PROVIDER],
}
,{
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('User', CustomerSchema),
    inject: [MONGO_PROVIDER]
}];
