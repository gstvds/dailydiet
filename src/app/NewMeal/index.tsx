import { useRef, useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Title } from '~/components/Title';
import { TextField } from '~/components/TextField';
import { Select } from '~/components/Select';
import { Button } from '~/components/Button';

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

export function NewMeal() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selected, setSelected] = useState<'yes' | 'no' | null>(null);
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
    if (text.length <= 10) {
      setDate(text);
    }
  }

  function handleSetTime(text: string) {
    if (text.length <= 5) {
      setTime(text);
    }

    if (text.length >= 5) {
      Keyboard.dismiss();
    }
  }

  function handleSelectYes() {
    if (selected === 'yes') {
      setSelected(null);
      return;
    }
    setSelected('yes');
  }

  function handleSelectNo() {
    if (selected === 'no') {
      setSelected(null);
      return;
    }
    setSelected('no');
  }

  function handleSubmit() {
    navigation.navigate('Feedback');
  }

  return (
    <VStack>
      <HeaderStack onPress={handleDismiss}>
        <HeaderWrapper>
          <ButtonBackStack onPress={handleNavigation}>
            <ButtonBack />
          </ButtonBackStack>
          <Title type="small">Nova refeição</Title>
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
        <Button label="Cadastrar refeição" solid onPress={handleSubmit} />
      </ButtonStack>
    </VStack>
  );
}
