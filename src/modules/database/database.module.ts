import { Module } from '@nestjs/common';
import { MssqlDatabaseProvider } from 'src/modules/database/providers/mssql.providers';
import { mongoDatabaseProvider } from './providers/mongo.providers';

@Module({
  providers: [MssqlDatabaseProvider, ...mongoDatabaseProvider],
  exports: [MssqlDatabaseProvider, ...mongoDatabaseProvider],
})
export class DatabaseModule {}
