import type { RootStackParamList } from '~/shared/constants';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
