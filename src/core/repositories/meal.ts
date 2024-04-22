import { StorageProvider } from '~/core/providers/storage';
import { Meal } from '~/core/entities/Meal';

interface UpdateMeal {
  name?: string;
  description?: string;
  date?: string;
  hour?: string;
  on_diet?: boolean;
}

export class MealRepository {
  private storage: StorageProvider;

  constructor(storage: StorageProvider) {
    this.storage = storage;
  }

  async create(payload: Meal): Promise<Meal> {
    const meals = await this.storage.getByKey<Meal[]>('meals');
    const updated = [...meals, payload];
    await this.storage.set({
      key: 'meals',
      value: updated,
    });
    return payload;
  }

  async update(id: string, payload: UpdateMeal): Promise<Meal> {
    const meals = await this.storage.getByKey<Meal[]>('meals');
    const index = meals.findIndex((meal) => meal.id === id);

    if (index === -1) {
      return;
    }

    const updated = Meal.create({
      id,
      name: payload.name ?? meals[index].name,
      description: payload.description ?? meals[index].description,
      date: payload.date ?? meals[index].date,
      hour: payload.hour ?? meals[index].hour,
      on_diet: payload.on_diet ?? meals[index].on_diet,
      created_at: meals[index].created_at,
      updated_at: new Date(),
    });
    meals[index] = updated;

    await this.storage.set({
      key: 'meals',
      value: meals,
    });
    return updated;
  }

  async delete(id: string): Promise<void> {
    const meals = await this.storage.getByKey<Meal[]>('meals');
    const filtered = meals.filter((meal) => meal.id !== id);
    await this.storage.set({
      key: 'meals',
      value: filtered,
    });
  }

  async getAll(): Promise<Meal[]> {
    const meals = await this.storage.getByKey<Meal[]>('meals');
    return meals;
  }
}
