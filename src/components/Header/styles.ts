import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight + 16}px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 100%;
`;

export const AvatarStack = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.gray_200};
  overflow: hidden;
`;

export const Avatar = styled.Image`
  height: 100%;
  width: 100%;
`;
