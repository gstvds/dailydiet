import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';

import { useMeal } from '~/contexts/MealContext';
import { MEAL_GOAL, RootStackParamList } from '~/shared/constants';

import { BodyStack, ButtonBack, ButtonBackStack, Card, DataStack, HeaderCurved, HeaderStack, VStack, HStack, SmallCard } from './styles';

type StatisticsProps = NativeStackScreenProps<RootStackParamList, 'Statistics'>;

export function Statistics({ navigation }: StatisticsProps) {
  const { meals, statistics } = useMeal();
  const onDiet = statistics.mealsIn / meals.length > MEAL_GOAL;

  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <VStack>
      <HeaderStack onDiet={onDiet}>
        <HeaderCurved />
        <ButtonBackStack onPress={handleNavigation}>
          <ButtonBack onDiet={onDiet} />
        </ButtonBackStack>
        <Title type="large" centered>
          {((statistics.mealsIn / statistics.total) * 100).toFixed(2)}%
        </Title>
        <Body type="small" centered>
          das refeições dentro da dieta
        </Body>
      </HeaderStack>
      <BodyStack>
        <Title type="tiny" centered>
          Estatísticas gerais
        </Title>
        <DataStack>
          <Card>
            <Title type="medium">{statistics.streak}</Title>
            <Body type="small">melhor sequência de pratos dentro da dieta</Body>
          </Card>
          <Card>
            <Title type="medium">{meals.length}</Title>
            <Body type="small">refeições registradas</Body>
          </Card>
          <HStack>
            <SmallCard in>
              <Title type="medium">{statistics.mealsIn}</Title>
              <Body type="small" centered numberOfLines={2}>
                refeições dentro da dieta
              </Body>
            </SmallCard>
            <SmallCard out>
              <Title type="medium">{statistics.mealsOut}</Title>
              <Body type="small" centered numberOfLines={2}>
                refeições fora da dieta
              </Body>
            </SmallCard>
          </HStack>
        </DataStack>
      </BodyStack>
    </VStack>
  );
}
