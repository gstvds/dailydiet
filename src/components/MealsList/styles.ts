import styled from 'styled-components/native';
import { Body } from '~/components/Body';

interface MealListProps {
  onDiet?: boolean;
}

export const VStack = styled.View`
  flex: 1;
`;

export const MealItemStack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray_500};
  gap: 12px;
`;

export const HStack = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const MealTitle = styled(Body)`
  max-width: 217px;
`;

export const MealStatus = styled.View<MealListProps>`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${(props) => (props.onDiet ? props.theme.colors.green_mid : props.theme.colors.red_mid)};
`;

export const Separator = styled.View`
  height: 14px;
  border: 1px solid ${(props) => props.theme.colors.gray_400};
`;

export const SectionSeparator = styled.View`
  height: 10px;
`;

export const ItemSeparator = styled.View`
  height: 6px;
`;

export const ListFooter = styled.View`
  margin-bottom: 60px;
`;
