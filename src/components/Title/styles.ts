import styled, { Theme } from 'styled-components/native';

interface TitleProps {
  type: 'large' | 'medium' | 'small' | 'tiny';
  centered?: boolean;
  color?: keyof Theme['colors'];
}

export const Label = styled.Text<TitleProps>`
  font-family: ${(props) => props.theme.fonts.family.bold};
  color: ${(props) => props.theme.colors[props.color ?? 'gray_100']};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  font-size: ${(props) => {
    switch (props.type) {
      case 'large':
        return props.theme.fonts.size.xxl;
      case 'medium':
        return props.theme.fonts.size.xl;
      case 'small':
        return props.theme.fonts.size.lg;
      case 'tiny':
        return props.theme.fonts.size.sm;
    }
  }};
`;
