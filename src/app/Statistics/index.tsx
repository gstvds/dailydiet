import { useNavigation } from '@react-navigation/native';

import { BodyStack, ButtonBack, ButtonBackStack, Card, DataStack, HeaderCurved, HeaderStack, VStack, HStack, SmallCard } from './styles';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';

export function Statistics() {
  const percentage = 0.9;
  const sequency = 22;
  const totalMeals = 109;
  const totalMealsIn = 99;
  const totalMealsOut = 10;
  const onDiet = percentage > 0.8;

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <VStack>
      <HeaderStack onDiet={onDiet}>
        <HeaderCurved />
        <ButtonBackStack onPress={handleNavigation}>
          <ButtonBack />
        </ButtonBackStack>
        <Title type="large" centered>
          90%
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
            <Title type="medium">{sequency}</Title>
            <Body type="small">melhor sequência de pratos dentro da dieta</Body>
          </Card>
          <Card>
            <Title type="medium">{totalMeals}</Title>
            <Body type="small">refeições registradas</Body>
          </Card>
          <HStack>
            <SmallCard in>
              <Title type="medium">{totalMealsIn}</Title>
              <Body type="small" centered numberOfLines={2}>
                refeições dentro da dieta
              </Body>
            </SmallCard>
            <SmallCard out>
              <Title type="medium">{totalMealsOut}</Title>
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
