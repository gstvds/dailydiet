import { ArrowUpRight } from 'phosphor-react-native';
import styled from 'styled-components/native';

interface StatisticsProps {
  goalAchieved: boolean;
}

export const VStack = styled.TouchableOpacity<StatisticsProps>`
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${(props) => (props.goalAchieved ? props.theme.colors.green_light : props.theme.colors.red_light)};
  margin-bottom: 40px;
  margin-top: 32px;
`;

export const IconStack = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Icon = styled(ArrowUpRight)<StatisticsProps>`
  color: ${(props) => (props.goalAchieved ? props.theme.colors.green_dark : props.theme.colors.red_dark)};
  size: ${(props) => props.theme.fonts.size.xl};
`;
