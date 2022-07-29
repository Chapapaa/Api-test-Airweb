import { DataSource } from 'typeorm';

// Informations de configuration de la database 'DATABASE.sqlite' située dans ../../src/DATABASE.sqlite
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'DATABASE',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
