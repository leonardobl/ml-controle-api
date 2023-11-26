import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'magazine123',
  database: 'ml-controle',
  // entities: [Users, Devices],
  migrations: ['@shared' + '\\infra\\typeorm\\migrations\\*.ts'],
});
