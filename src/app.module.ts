import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BackofficeModule } from 'src/modules/backoffice/backoffice.module';
import configuration from 'configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'local.env',
      load: [configuration]
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    BackofficeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
