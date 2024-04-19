import { TextProps } from 'react-native';
import { Theme } from 'styled-components/native';

import { Label } from './styles';

interface BodyProps extends TextProps {
  type: 'medium' | 'small' | 'tiny';
  centered?: boolean;
  color?: keyof Theme['colors'];
}

export function Body({ children, ...rest }: BodyProps) {
  return <Label {...rest}>{children}</Label>;
}
