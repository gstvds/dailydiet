import styled, { css } from 'styled-components/native';

export const VStack = styled.Modal``;

export const Backdrop = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
`;

export const ModalStack = styled.View`
  border-radius: 8px;
  width: 100%;
  max-height: 192px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray_700};
  padding: 40px 24px 24px 24px;
  gap: 32px;
`;

export const ActionStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

interface ActionButtonProps {
  solid?: boolean;
}

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray_100};
  width: 100%;
  max-width: 135px;

  ${(props) =>
    props.solid &&
    css`
      background-color: ${props.theme.colors.gray_100};
      border: none;
    `}
`;
