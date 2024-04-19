export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  on_diet: boolean;
  created_at: Date;
  updated_at: Date;
}

export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: undefined;
  Meal: { mealId: string };
};
