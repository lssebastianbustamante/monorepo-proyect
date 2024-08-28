import { DataSource } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { options } from '../data-source';

(async () => {
  await createDatabase({
    options,
  });

  const dataSource = new DataSource(options);
  await dataSource.initialize();
})();
