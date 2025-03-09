import { ConfigService } from "@nestjs/config";
import { IMongoConfig } from "configurations/mongo.configurations";
import mongoose from "mongoose";
import { MONGO_CONFIG, MONGO_PROVIDER } from "src/constants";

export const mongoDatabaseProvider = [
    {
        provide: MONGO_PROVIDER,
        inject: [ConfigService],
        useFactory: (configService: ConfigService): Promise<typeof mongoose> =>
            mongoose.connect(configService.get<IMongoConfig>(MONGO_CONFIG).connectionString)
    },
  ];