import { ForwardRefRenderFunction, forwardRef, useMemo, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps, TextInput } from 'react-native';
import { maskJs } from 'mask-js';

import { Title } from '~/components/Title';

import { Input, VStack } from './styles';
import { Body } from '../Body';

interface TextFieldProps extends TextInputProps {
  half?: boolean;
  label: string;
  mask?: string;
  error?: string;
}

const InternalTextField: ForwardRefRenderFunction<TextInput, TextFieldProps> = (
  { half = false, label, value: rawValue, mask, error, ...rest }: TextFieldProps,
  ref,
) => {
  const [focused, setFocused] = useState(false);
  const value = useMemo(() => {
    if (mask) {
      return maskJs(mask, rawValue);
    }

    return rawValue;
  }, [rawValue, mask]);

  function handleFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true);
    rest.onFocus?.(event);
  }

  function handleBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false);
    rest.onBlur?.(event);
  }

  return (
    <VStack half={half}>
      <Title type="tiny" color={error ? 'red_dark' : undefined}>
        {label}
      </Title>
      <Input {...rest} error={error} as={TextInput} value={value} onFocus={handleFocus} onBlur={handleBlur} focused={focused} ref={ref} />
      {error && (
        <Body type="medium" color="red_dark">
          {error}
        </Body>
      )}
    </VStack>
  );
};

export const TextField = forwardRef(InternalTextField);
