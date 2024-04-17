import { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';

import { VStack, IconStack, Icon } from './styles';

interface StatisticsProps extends TouchableOpacityProps {
  percentage: number;
}

const GOAL = 0.8;

export function StatisticsCard({ percentage, ...rest }: StatisticsProps) {
  const parsedPercentage = useMemo(() => {
    const finalPercentage = percentage * 100;
    return finalPercentage.toFixed(2);
  }, [percentage]);
  const goalAchieved = useMemo(() => percentage >= GOAL, [percentage]);

  return (
    <VStack goalAchieved={goalAchieved} {...rest}>
      <IconStack>
        <Icon goalAchieved={goalAchieved} />
      </IconStack>
      <Title centered type="large">
        {parsedPercentage}%
      </Title>
      <Body centered type="small">
        das refeições dentro da dieta
      </Body>
    </VStack>
  );
}
