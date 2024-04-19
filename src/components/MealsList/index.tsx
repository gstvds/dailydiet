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
  const sections = meals.reduce((accumulator: Section[], meal) => {
    const [day, month, year] = meal.date.split('/');
    const formattedDate = `${day}.${month}.${year.substring(2)}`;
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
