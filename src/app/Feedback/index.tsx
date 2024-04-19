import { useEffect, useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';
import { Button } from '~/components/Button';

import { RootStackParamList } from '~/shared/constants';

import onDiet from '~/assets/on_diet.png';
import notOnDiet from '~/assets/not_on_diet.png';

import { DietImage, DietStack, TitleStack, VStack } from './styles';

type FeedbackProps = NativeStackScreenProps<RootStackParamList, 'Feedback'>;

export function Feedback({ navigation }: FeedbackProps) {
  const isOnDiet = useMemo(() => false, []);

  function handleNavigation() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    const listener = navigation.addListener('beforeRemove', (event) => {
      event.preventDefault;
    });

    return () => listener();
  }, [navigation]);

  return (
    <VStack>
      {isOnDiet ? (
        <TitleStack>
          <Title type="medium" color="green_dark" centered>
            Continue assim!
          </Title>
          <Body type="medium" centered>
            Você continua{' '}
            <Body type="medium" bold>
              dentro da dieta.
            </Body>{' '}
            Muito bem!
          </Body>
        </TitleStack>
      ) : (
        <TitleStack>
          <Title type="medium" color="red_dark" centered>
            Que pena!
          </Title>
          <Body type="medium" centered>
            Você{' '}
            <Body type="medium" bold>
              saiu da dieta
            </Body>{' '}
            dessa vez, mas continue se esforçando e não desista!
          </Body>
        </TitleStack>
      )}
      <DietStack>
        <DietImage source={isOnDiet ? onDiet : notOnDiet} resizeMode="contain" />
      </DietStack>
      <Button label="Ir para a página inicial" solid half onPress={handleNavigation} />
    </VStack>
  );
}
