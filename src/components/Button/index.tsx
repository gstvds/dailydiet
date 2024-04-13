import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { VStack, HStack, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon: React.FC<SvgProps>;
  solid?: boolean;
  label: string;
}

export function Button({ icon: Icon, solid, label, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <VStack solid={solid} {...rest}>
      <HStack>
        <Icon width={18} height={18} color={solid ? theme.colors.white : theme.colors.gray_100} />
        <Label solid={solid}>{label}</Label>
      </HStack>
    </VStack>
  );
}
