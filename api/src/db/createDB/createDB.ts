import { AppDataSource } from '../data-source';

(async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database created successfully.');
  } catch (error) {
    console.error('Error creating database:', error);
  }
})();
