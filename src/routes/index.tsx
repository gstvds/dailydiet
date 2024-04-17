import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~/app/Home';
import { Statistics } from '~/app/Statistics';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
}
