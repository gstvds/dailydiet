import styled, { css } from 'styled-components/native';

interface ButtonProps {
  solid?: boolean;
  half?: boolean;
}

export const VStack = styled.TouchableOpacity<ButtonProps>`
  width: ${(props) => (props.half ? '50%' : '100%')};
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray_100};
  border-radius: 6px;

  ${(props) =>
    props.solid &&
    css`
      background-color: ${props.theme.colors.gray_100};
      border: none;
    `}
`;

export const HStack = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const Label = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  color: ${({ solid, theme }) => (solid ? theme.colors.white : theme.colors.gray_100)};
`;
