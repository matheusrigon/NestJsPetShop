import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BackofficeModule } from 'src/modules/backoffice/backoffice.module';
import { StoreModule } from 'src/modules/store/store.module';
import configuration from 'configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      load: [configuration]
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    BackofficeModule,
    StoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
