import styled from 'styled-components/native';

interface TextFieldProps {
  half?: boolean;
  focused?: boolean;
}

export const VStack = styled.View<TextFieldProps>`
  width: ${(props) => (props.half ? '48%' : '100%')};
  gap: 4px;
`;

export const Input = styled.TextInput<TextFieldProps>`
  border: 1px solid ${(props) => (props.focused ? props.theme.colors.gray_300 : props.theme.colors.gray_500)};
  border-radius: 6px;
  padding: 14px;
  height: ${(props) => (props.multiline ? '120px' : '48px')};
  color: ${(props) => props.theme.colors.gray_100};
`;
