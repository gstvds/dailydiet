import { TextProps } from 'react-native';
import { Label } from './styles';

interface BodyProps extends TextProps {
  type: 'medium' | 'small' | 'tiny';
  centered?: boolean;
}

export function Body({ children, ...rest }: BodyProps) {
  return <Label {...rest}>{children}</Label>;
}
