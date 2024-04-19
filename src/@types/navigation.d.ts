export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
