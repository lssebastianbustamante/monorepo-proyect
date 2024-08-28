import { runSeeders } from 'typeorm-extension';
import { dataSource } from '../data-source';

dataSource.initialize().then(async () => {
  await runSeeders(dataSource);
  console.log('Data Base Populate');
});
