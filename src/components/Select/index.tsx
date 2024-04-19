import { TouchableHighlightProps } from 'react-native';

import { Title } from '~/components/Title';

import { VStack, HStack, Indicator } from './styled';

interface SelectProps extends TouchableHighlightProps {
  type: 'yes' | 'no';
  selected?: boolean;
}

export function Select({ type, selected, ...rest }: SelectProps) {
  return (
    <VStack {...rest} type={type} selected={selected}>
      <HStack>
        <Indicator type={type} />
        <Title type="tiny">{type === 'yes' ? 'Sim' : 'Não'}</Title>
      </HStack>
    </VStack>
  );
}
