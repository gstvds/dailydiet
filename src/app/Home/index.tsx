import { useEffect } from 'react';
import { Plus } from 'phosphor-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header } from '~/components/Header';
import { Body } from '~/components/Body';
import { StatisticsCard } from '~/components/StatisticsCard';
import { Button } from '~/components/Button';
import { MealsList } from '~/components/MealsList';

import { useMeal } from '~/contexts/MealContext';
import { RootStackParamList } from '~/shared/constants';

import { NewMealStack, VStack } from './styles';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: HomeProps) {
  const { meals, getMeals, statistics } = useMeal();

  function handleStatistics() {
    navigation.navigate('Statistics');
  }

  function handleNewMeal() {
    navigation.navigate('NewMeal');
  }

  function handleSeeMeal(mealId: string) {
    navigation.navigate('Meal', { mealId });
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <VStack>
      <Header />
      <StatisticsCard percentage={statistics.mealsIn / statistics.total} onPress={handleStatistics} />
      <NewMealStack>
        <Body type="medium">Refeições</Body>
        <Button solid icon={Plus} label="Nova refeição" onPress={handleNewMeal} />
      </NewMealStack>
      <MealsList meals={meals} onPress={handleSeeMeal} />
    </VStack>
  );
}
