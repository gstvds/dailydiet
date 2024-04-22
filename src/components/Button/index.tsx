import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { VStack, HStack, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon?: React.FC<IconProps>;
  solid?: boolean;
  label: string;
  half?: boolean;
  loading?: boolean;
}

export function Button({ icon: Icon, solid, label, loading, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <VStack solid={solid} {...rest}>
      <HStack>
        {Icon && <Icon size={18} color={solid ? theme.colors.white : theme.colors.gray_100} />}
        {loading ? <ActivityIndicator /> : <Label solid={solid}>{label}</Label>}
      </HStack>
    </VStack>
  );
}
