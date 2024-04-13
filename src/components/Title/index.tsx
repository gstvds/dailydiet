import { TextProps } from 'react-native';

import { Label } from './styles';

interface TitleProps extends TextProps {
  type: 'large' | 'medium' | 'small' | 'tiny';
  centered?: boolean;
}

export function Title({ children, ...rest }: TitleProps) {
  return <Label {...rest}>{children}</Label>;
}
