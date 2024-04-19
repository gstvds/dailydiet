import { TextProps } from 'react-native';
import { Theme } from 'styled-components/native';

import { Label } from './styles';

interface TitleProps extends TextProps {
  type: 'large' | 'medium' | 'small' | 'tiny';
  centered?: boolean;
  color?: keyof Theme['colors'];
}

export function Title({ children, ...rest }: TitleProps) {
  return <Label {...rest}>{children}</Label>;
}
