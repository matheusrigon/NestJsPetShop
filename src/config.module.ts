import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigService,
  ],
  controllers: [],
  providers: [],
})
export class ConfigModule{

}