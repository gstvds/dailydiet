import styled from 'styled-components/native';

export const VStack = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleStack = styled.View`
  gap: 8px;
`;

export const DietStack = styled.View`
  width: 224px;
  margin: 32px 0px;
`;

export const DietImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))``;
