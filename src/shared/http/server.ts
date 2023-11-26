import 'reflect-metadata';
import { app } from './app';
import { dataSource } from '@shared/infra/typeorm';

const port = 3333;

dataSource.initialize().then(() => {
  app.listen(port, () => console.log(`Server on port ${port}`));
});
