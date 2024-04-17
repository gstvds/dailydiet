export type RootStackParamList = {
  Home: undefined;
  Statistics: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
