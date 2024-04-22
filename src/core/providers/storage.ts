import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';

interface Set {
  key: string;
  value: object;
}

export class StorageProvider {
  private storage: AsyncStorageStatic;

  constructor() {
    this.storage = AsyncStorage;
  }

  async set(payload: Set) {
    await this.storage.setItem(payload.key, JSON.stringify(payload.value));
  }

  async getByKey<T extends object>(key: string) {
    const meal = await this.storage.getItem(key);
    const parsed: T = JSON.parse(meal) ?? [];
    return parsed;
  }

  async delete(key: string) {
    await this.storage.removeItem(key);
  }
}
