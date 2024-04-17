import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';
import { ArrowLeft } from 'phosphor-react-native';

interface StatisticsProps {
  onDiet: boolean;
}

export const VStack = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
`;

export const HeaderStack = styled.View<StatisticsProps>`
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.onDiet ? props.theme.colors.green_light : props.theme.colors.red_light)};
  position: relative;
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

export const ButtonBackStack = styled.TouchableOpacity`
  position: absolute;
  top: ${Constants.statusBarHeight + 16}px;
  left: 24px;
`;

export const ButtonBack = styled(ArrowLeft)`
  color: ${(props) => props.theme.colors.green_dark};
  size: 24px;
`;

export const BodyStack = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray_700};
  padding: 0px 24px;
`;

export const DataStack = styled.View`
  margin-top: 24px;
  gap: 8px;
`;

export const Card = styled.View`
  width: 100%;
  max-height: 89px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray_600};
  align-items: center;
  justify-content: center;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

interface SmallCardProps {
  in?: boolean;
  out?: boolean;
}

export const SmallCard = styled.View<SmallCardProps>`
  height: 107px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;

  ${(props) =>
    props.in &&
    css`
      background-color: ${props.theme.colors.green_light};
    `}
  ${(props) =>
    props.out &&
    css`
      background-color: ${props.theme.colors.red_light};
    `}
`;
