import Constants from 'expo-constants';
import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const VStack = styled.View`
  flex: 1;
`;

interface MealProps {
  onDiet?: boolean;
}

export const HeaderStack = styled.View<MealProps>`
  height: ${Constants.statusBarHeight + 100}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.onDiet ? props.theme.colors.green_light : props.theme.colors.red_light)};
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

export const BodyStack = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
  padding: 0px 24px;
`;

export const TitleStack = styled.View`
  gap: 4px;
`;

export const DateStack = styled.View`
  margin: 12px 0px;
  gap: 4px;
`;

export const Tag = styled.View`
  width: 144px;
  padding: 8px 16px;
  border-radius: 1000px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.gray_600};
`;

export const TagStatus = styled.View<MealProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.onDiet ? props.theme.colors.green_dark : props.theme.colors.red_dark)};
`;

export const ButtonStack = styled.View`
  position: absolute;
  width: 100%;
  bottom: 40px;
  padding: 0px 24px;
  gap: 8px;
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
