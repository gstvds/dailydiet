import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { Home } from '~/app/Home';
import { NewMeal } from '~/app/NewMeal';
import { Statistics } from '~/app/Statistics';
import { Feedback } from '~/app/Feedback';
import { Meal } from '~/app/Meal';
import { EditMeal } from '~/app/EditMeal';

const Stack = createNativeStackNavigator();

export function Routes() {
  const theme = useTheme();

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.gray_700 } }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Meal" component={Meal} />
      <Stack.Screen name="EditMeal" component={EditMeal} />
    </Stack.Navigator>
  );
}
