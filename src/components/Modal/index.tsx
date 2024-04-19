import { ModalProps as RNModalProps } from 'react-native';

import { Title } from '~/components/Title';
import { Body } from '~/components/Body';

import { ActionButton, ActionStack, Backdrop, ModalStack, VStack } from './styles';

interface ModalProps extends RNModalProps {
  label: string;
  onAction?: () => void;
  action: string;
}

export function Modal({ label, action, onAction, onDismiss, ...rest }: ModalProps) {
  return (
    <VStack {...rest} transparent statusBarTranslucent>
      <Backdrop onPress={onDismiss}>
        <ModalStack>
          <Title type="small" centered>
            {label}
          </Title>
          <ActionStack>
            <ActionButton onPress={onDismiss}>
              <Body type="small" bold centered>
                Cancelar
              </Body>
            </ActionButton>
            <ActionButton onPress={onAction} solid>
              <Body type="small" bold color="white" centered>
                {action}
              </Body>
            </ActionButton>
          </ActionStack>
        </ModalStack>
      </Backdrop>
    </VStack>
  );
}
