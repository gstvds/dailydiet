import { ThemeProvider } from 'styled-components/native';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from '~/themes';
import { Routes } from '~/routes';
import { MealProvider } from '~/contexts/MealContext';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MealProvider>
          <Routes />
        </MealProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
