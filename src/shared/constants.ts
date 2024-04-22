export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  on_diet: boolean;
  created_at: Date;
  updated_at: Date;
  meal_date: Date;
}

export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: { onDiet: boolean };
  Meal: { mealId: string };
  EditMeal: { mealId: string };
};

export const MEAL_GOAL = 0.8;
