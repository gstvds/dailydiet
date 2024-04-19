import styled, { css } from 'styled-components/native';

interface SelectProps {
  type: 'yes' | 'no';
  selected?: boolean;
}

export const VStack = styled.TouchableHighlight.attrs<SelectProps>((props) => ({
  activeOpacity: 0.8,
  underlayColor: props.type === 'yes' ? props.theme.colors.green_light : props.theme.colors.red_light,
}))`
  height: 50px;
  width: 48%;
  background-color: ${(props) => props.theme.colors.gray_600};
  border-radius: 6px;
  padding: 16px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${props.type === 'yes' ? props.theme.colors.green_light : props.theme.colors.red_light};
      border: 1px solid ${props.type === 'yes' ? props.theme.colors.green_dark : props.theme.colors.red_dark};
    `}
`;

export const HStack = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Indicator = styled.View<SelectProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.type === 'yes' ? props.theme.colors.green_dark : props.theme.colors.red_dark)};
`;
