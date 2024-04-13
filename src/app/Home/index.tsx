import { Plus } from 'phosphor-react-native';
import { NewMealStack, VStack } from './styles';

import { Header } from '~/components/Header';
import { Body } from '~/components/Body';
import { StatisticsCard } from '~/components/StatisticsCard';
import { Button } from '~/components/Button';
import { MealsList } from '~/components/MealsList';

import { meals } from '~/shared/data';
import { useMemo } from 'react';

export function Home() {
  const percentage = useMemo(() => {
    const onDietMeals = meals.filter((meal) => meal.on_diet).length;
    const totalMeals = meals.length;

    return onDietMeals / totalMeals;
  }, [meals]);

  return (
    <VStack>
      <Header />
      <StatisticsCard percentage={percentage} />
      <NewMealStack>
        <Body type="medium">Refeições</Body>
        <Button solid icon={Plus} label="Nova refeição" />
      </NewMealStack>
      <MealsList meals={meals} />
    </VStack>
  );
}
