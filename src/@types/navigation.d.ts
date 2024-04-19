export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
  NewMeal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
