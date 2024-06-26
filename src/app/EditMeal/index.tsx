import { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Title } from '~/components/Title';
import { TextField } from '~/components/TextField';
import { Select } from '~/components/Select';
import { Button } from '~/components/Button';
import { Modal } from '~/components/Modal';

import { RootStackParamList } from '~/shared/constants';
import { useMeal } from '~/contexts/MealContext';

import {
  BodyStack,
  ButtonBack,
  ButtonBackStack,
  ButtonStack,
  DietStack,
  HStack,
  HeaderCurved,
  HeaderStack,
  HeaderWrapper,
  ScrollableStack,
  VStack,
} from './styles';

type EditMealProps = NativeStackScreenProps<RootStackParamList, 'EditMeal'>;

export function EditMeal({ route, navigation }: EditMealProps) {
  const { meals, updateMeal, loading } = useMeal();
  const meal = meals.find((currentMeal) => currentMeal.id === route.params.mealId);

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [time, setTime] = useState(meal.hour);
  const [selected, setSelected] = useState<'yes' | 'no' | null>(meal.on_diet ? 'yes' : 'no');
  const isEditing = useRef<boolean>(false);
  const [isDiscarding, setIsDiscarding] = useState(false);
  const nameRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);
  const timeRef = useRef<TextInput>(null);

  function handleDismiss() {
    Keyboard.dismiss();
  }

  function handleNavigation() {
    navigation.goBack();
  }

  function handleSetDate(text: string) {
    isEditing.current = true;
    if (text.length <= 10) {
      setDate(text);
    }
  }

  function handleSetTime(text: string) {
    isEditing.current = true;
    if (text.length <= 5) {
      setTime(text);
    }

    if (text.length >= 5) {
      Keyboard.dismiss();
    }
  }

  function handleSelectYes() {
    isEditing.current = true;
    if (selected === 'yes') {
      setSelected(null);
      return;
    }
    setSelected('yes');
  }

  function handleSelectNo() {
    isEditing.current = true;
    if (selected === 'no') {
      setSelected(null);
      return;
    }
    setSelected('no');
  }

  async function handleSubmit() {
    isEditing.current = false;
    await updateMeal(route.params.mealId, {
      name,
      description,
      date,
      hour: time,
      onDiet: selected === 'yes',
    });

    navigation.goBack();
  }

  function handleDiscard() {
    isEditing.current = false;
    navigation.goBack();
  }

  function handleDismissModal() {
    setIsDiscarding(false);
  }

  useEffect(() => {
    const listener = navigation.addListener('beforeRemove', (event) => {
      if (isEditing.current) {
        event.preventDefault();
        setIsDiscarding(true);
      }
    });

    return () => navigation.removeListener('beforeRemove', listener);
  }, []);

  return (
    <VStack>
      <HeaderStack onPress={handleDismiss}>
        <HeaderWrapper>
          <ButtonBackStack onPress={handleNavigation}>
            <ButtonBack />
          </ButtonBackStack>
          <Title type="small">Editar refeição</Title>
          <View style={{ width: 24, height: 24 }} />
        </HeaderWrapper>
        <HeaderCurved />
      </HeaderStack>
      <ScrollableStack>
        <BodyStack onPress={handleDismiss}>
          <TextField
            label="Nome"
            value={name}
            onChangeText={setName}
            ref={nameRef}
            onSubmitEditing={() => descriptionRef.current.focus()}
            returnKeyType="next"
          />
          <TextField
            label="Descrição"
            multiline
            value={description}
            onChangeText={setDescription}
            ref={descriptionRef}
            onSubmitEditing={() => dateRef.current.focus()}
            returnKeyType="default"
          />
          <HStack>
            <TextField
              half
              ref={dateRef}
              label="Data"
              mask="99/99/9999"
              placeholder="DD/MM/AAAA"
              value={date}
              onChangeText={handleSetDate}
              onSubmitEditing={() => timeRef.current.focus()}
              keyboardType="number-pad"
            />
            <TextField
              half
              ref={timeRef}
              label="Hora"
              mask="99:99"
              placeholder="HH:mm"
              value={time}
              onChangeText={handleSetTime}
              onSubmitEditing={handleDismiss}
              keyboardType="number-pad"
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && time.length === 0) {
                  dateRef.current.focus();
                }
              }}
            />
          </HStack>
          <DietStack>
            <Title type="tiny">Está dentro da dieta?</Title>
            <HStack>
              <Select type="yes" selected={selected === 'yes'} onPress={handleSelectYes} />
              <Select type="no" selected={selected === 'no'} onPress={handleSelectNo} />
            </HStack>
          </DietStack>
        </BodyStack>
      </ScrollableStack>
      <ButtonStack>
        <Button label="Salvar alterações" solid onPress={handleSubmit} loading={loading} />
      </ButtonStack>
      <Modal label="Descartar alterações?" action="Descartar" visible={isDiscarding} onAction={handleDiscard} onDismiss={handleDismissModal} />
    </VStack>
  );
}
