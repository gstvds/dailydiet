import styled from 'styled-components/native';

interface BodyProps {
  type: 'medium' | 'small' | 'tiny';
  centered?: boolean;
}

export const Label = styled.Text<BodyProps>`
  font-family: ${(props) => props.theme.fonts.family.regular};
  color: ${(props) => props.theme.colors.gray_200};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  font-size: ${(props) => {
    switch (props.type) {
      case 'medium':
        return props.theme.fonts.size.md;
      case 'small':
        return props.theme.fonts.size.sm;
      case 'tiny':
        return props.theme.fonts.size.xs;
    }
  }};
`;
