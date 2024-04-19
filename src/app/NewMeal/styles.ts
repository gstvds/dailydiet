import Constants from 'expo-constants';
import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const VStack = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const HeaderStack = styled.Pressable`
  height: ${Constants.statusBarHeight + 100}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray_500};
  position: relative;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonBackStack = styled.TouchableOpacity``;

export const ButtonBack = styled(ArrowLeft)`
  color: ${(props) => props.theme.colors.gray_200};
  size: 24px;
`;

export const HeaderCurved = styled.View`
  height: 32px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray_700};
  position: absolute;
  bottom: 0px;
`;

export const BodyStack = styled.Pressable`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
  padding: 0px 24px;
  gap: 32px;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DietStack = styled.View`
  gap: 4px;
`;

export const ButtonStack = styled.View`
  position: absolute;
  width: 100%;
  bottom: 40px;
  padding: 0px 24px;
`;

export const ScrollableStack = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 360,
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
`;
