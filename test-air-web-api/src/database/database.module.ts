import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

// Contrôle les imports et exports du module database
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
