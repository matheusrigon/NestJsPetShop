import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BackofficeModule } from 'src/modules/backoffice/backoffice.module';
import { StoreModule } from 'src/modules/store/store.module';
import configuration from 'configurations/configuration';
import mssqlConfigurations from 'configurations/mssql.configurations';
import mongoConfigurations from 'configurations/mongo.configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      load: [
        configuration, 
        mssqlConfigurations, 
        mongoConfigurations
      ],
      isGlobal: true
    }),
    BackofficeModule,
    StoreModule    
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
