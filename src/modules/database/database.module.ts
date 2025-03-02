
import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/modules/database/providers/database.providers';

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
