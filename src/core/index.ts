import { StorageProvider } from './providers/storage';
import { MealRepository } from './repositories/meal';
import { Meal } from './entities/Meal';

const storage = new StorageProvider();
const mealRepository = new MealRepository(storage);

export { storage, mealRepository, Meal };
