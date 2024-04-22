import { createContext, useCallback, useContext, useState } from 'react';

import { mealRepository, Meal } from '~/core';

interface CreateMealProps {
  name: string;
  description: string;
  date: string;
  hour: string;
  onDiet: boolean;
}

interface UpdateMealProps {
  name?: string;
  description?: string;
  date?: string;
  hour?: string;
  onDiet?: boolean;
}

interface Statistics {
  mealsIn: number;
  mealsOut: number;
  streak: number;
  total: number;
}

interface MealContextProps {
  meals: Meal[];
  loading?: boolean;
  statistics: Statistics;
  createMeal: (payload: CreateMealProps) => Promise<Meal>;
  updateMeal: (id: string, payload: UpdateMealProps) => Promise<Meal>;
  deleteMeal: (id: string) => Promise<void>;
  getMeals: () => Promise<Meal[]>;
}

const MealContext = createContext({} as MealContextProps);

interface MealProviderProps {
  children: React.ReactNode;
}

const STATISTICS_INITIAL_STATE: Statistics = {
  mealsIn: 0,
  mealsOut: 0,
  streak: 0,
  total: 0,
};

export function MealProvider({ children }: MealProviderProps) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [statistics, setStatistics] = useState<Statistics>(STATISTICS_INITIAL_STATE);

  const getMeals = useCallback(async () => {
    setLoading(true);
    try {
      const meals = await mealRepository.getAll();
      if (meals) {
        const sortedMeals = meals.sort((a, b) => {
          const aDate = new Date(a.meal_date).getTime();
          const bDate = new Date(b.meal_date).getTime();
          return bDate - aDate;
        });
        setMeals(sortedMeals);
        getStreak(sortedMeals);
      }
      return meals;
    } finally {
      setLoading(false);
    }
  }, []);

  function getStreak(meals: Meal[]) {
    const streaks = meals.reduce(
      (accumulator, meal) => {
        if (meal.on_diet) {
          accumulator.current += 1;
          if (accumulator.current > accumulator.best) {
            accumulator.best = accumulator.current;
          }
        } else {
          accumulator.current = 0;
        }
        return accumulator;
      },
      { current: 0, best: 0 },
    );

    const mealsIn = meals.filter((meal) => meal.on_diet).length;
    const mealsOut = meals.length - mealsIn;

    if (streaks.best > statistics.streak) {
      setStatistics({ streak: streaks.best, mealsIn, mealsOut, total: meals.length });
      return;
    }

    setStatistics({ ...statistics, mealsIn, mealsOut, total: meals.length });
  }

  const createMeal = useCallback(async (payload: CreateMealProps) => {
    setLoading(true);
    try {
      const createMeal = Meal.create({
        name: payload.name,
        description: payload.description,
        date: payload.date,
        hour: payload.hour,
        on_diet: payload.onDiet,
      });

      const meal = await mealRepository.create(createMeal);
      await getMeals();
      return meal;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateMeal = useCallback(async (id: string, payload: UpdateMealProps) => {
    setLoading(true);
    try {
      const updatedMeal = await mealRepository.update(id, {
        date: payload.date,
        description: payload.description,
        hour: payload.hour,
        name: payload.name,
        on_diet: payload.onDiet,
      });
      await getMeals();
      return updatedMeal;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMeal = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await mealRepository.delete(id);
      await getMeals();
    } finally {
      setLoading(false);
    }
  }, []);

  return <MealContext.Provider value={{ meals, loading, statistics, getMeals, createMeal, updateMeal, deleteMeal }}>{children}</MealContext.Provider>;
}

export function useMeal() {
  return useContext(MealContext);
}
