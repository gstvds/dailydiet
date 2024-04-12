import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.bold};
  font-size: ${(props) => props.theme.fonts.size.xl};
`;
