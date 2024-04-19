import { useMemo } from 'react';
import { Plus } from 'phosphor-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Header } from '~/components/Header';
import { Body } from '~/components/Body';
import { StatisticsCard } from '~/components/StatisticsCard';
import { Button } from '~/components/Button';
import { MealsList } from '~/components/MealsList';

import { meals } from '~/shared/data';
import { RootStackParamList } from '~/shared/constants';

import { NewMealStack, VStack } from './styles';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: HomeProps) {
  const percentage = useMemo(() => {
    const onDietMeals = meals.filter((meal) => meal.on_diet).length;
    const totalMeals = meals.length;

    return onDietMeals / totalMeals;
  }, [meals]);

  function handleStatistics() {
    navigation.navigate('Statistics');
  }

  function handleNewMeal() {
    navigation.navigate('NewMeal');
  }

  function handleSeeMeal(mealId: string) {
    navigation.navigate('Meal', { mealId });
  }

  return (
    <VStack>
      <Header />
      <StatisticsCard percentage={percentage} onPress={handleStatistics} />
      <NewMealStack>
        <Body type="medium">Refeições</Body>
        <Button solid icon={Plus} label="Nova refeição" onPress={handleNewMeal} />
      </NewMealStack>
      <MealsList meals={meals} onPress={handleSeeMeal} />
    </VStack>
  );
}
