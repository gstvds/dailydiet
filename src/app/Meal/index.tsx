import { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';
import { Button } from '~/components/Button';
import { Modal } from '~/components/Modal';

import { RootStackParamList } from '~/shared/constants';
import { useMeal } from '~/contexts/MealContext';

import {
  BodyStack,
  ButtonBack,
  ButtonBackStack,
  ButtonStack,
  DateStack,
  HeaderCurved,
  HeaderStack,
  HeaderWrapper,
  ScrollableStack,
  Tag,
  TagStatus,
  TitleStack,
  VStack,
} from './styles';

type MealProps = NativeStackScreenProps<RootStackParamList, 'Meal'>;

export function Meal({ route, navigation }: MealProps) {
  const { meals, deleteMeal, loading } = useMeal();
  const [showDelete, setShowDelete] = useState(false);

  const meal = meals.find((currentMeal) => currentMeal.id === route.params.mealId);

  function handleNavigation() {
    navigation.goBack();
  }

  function handleSelectDelete() {
    setShowDelete(true);
  }

  function handleEdit() {
    navigation.navigate('EditMeal', { mealId: meal.id });
  }

  async function handleDelete() {
    await deleteMeal(meal.id);
    navigation.goBack();
  }

  return (
    <VStack>
      <HeaderStack onDiet={meal?.on_diet}>
        <HeaderWrapper>
          <ButtonBackStack onPress={handleNavigation}>
            <ButtonBack />
          </ButtonBackStack>
          <Title type="small">Refeição</Title>
          <View style={{ width: 24, height: 24 }} />
        </HeaderWrapper>
        <HeaderCurved />
      </HeaderStack>
      <ScrollableStack>
        <BodyStack>
          <TitleStack>
            <Title type="medium">{meal?.name}</Title>
            <Body type="medium">{meal?.description}</Body>
          </TitleStack>
          <DateStack>
            <Title type="tiny">Data e hora</Title>
            <Body type="medium">
              {meal?.date} às {meal?.hour}
            </Body>
          </DateStack>
          <Tag>
            <TagStatus onDiet={meal?.on_diet} />
            <Body type="small">{meal?.on_diet ? 'dentro da dieta' : 'fora da dieta'}</Body>
          </Tag>
        </BodyStack>
      </ScrollableStack>
      <ButtonStack>
        <Button label="Editar refeição" solid icon={PencilSimpleLine} onPress={handleEdit} loading={loading} />
        <Button label="Excluir refeição" icon={Trash} onPress={handleSelectDelete} loading={loading} />
      </ButtonStack>
      <Modal
        visible={showDelete}
        onDismiss={() => setShowDelete(false)}
        label="Deseja realmente excluir o registro da refeição?"
        action="Sim, excluir"
        onAction={handleDelete}
      />
    </VStack>
  );
}
