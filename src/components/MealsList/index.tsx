import { useMemo } from 'react';
import { SectionList } from 'react-native';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';

import { Meal } from '~/shared/constants';

import { HStack, ItemSeparator, ListFooter, MealItemStack, MealStatus, MealTitle, SectionSeparator, Separator, VStack } from './styles';

interface MealsListProps {
  meals: Meal[];
  onPress: (mealId: string) => void;
}

interface Section {
  date: string;
  data: Meal[];
}

export function MealsList({ meals, onPress }: MealsListProps) {
  const sections = useMemo(() => {
    const sortSections = meals.sort((a, b) => {
      return new Date(b.meal_date).getTime() - new Date(a.meal_date).getTime();
    });
    return sortSections.reduce((accumulator: Section[], meal) => {
      const mealDate = new Date(meal.meal_date);
      const formattedDate = `${mealDate.getDate()}.${(mealDate.getMonth() + 1).toString().padStart(2, '0')}.${mealDate.getFullYear().toString().substring(2)}`;
      const findSection = accumulator.find((section) => section.date === formattedDate);

      if (findSection) {
        findSection.data.push(meal);
      } else {
        accumulator.push({
          date: formattedDate,
          data: [meal],
        });
      }

      return accumulator;
    }, []);
  }, [meals]);

  return (
    <VStack>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <MealItemStack onPress={() => onPress(item.id)}>
              <Body type="tiny">{item.hour}</Body>
              <Separator />
              <HStack>
                <MealTitle type="medium" numberOfLines={1} ellipsizeMode="tail">
                  {item.name}
                </MealTitle>
                <MealStatus onDiet={item.on_diet} />
              </HStack>
            </MealItemStack>
          );
        }}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => <Title type="small">{section.date}</Title>}
        SectionSeparatorComponent={SectionSeparator}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ListFooter}
      />
    </VStack>
  );
}
