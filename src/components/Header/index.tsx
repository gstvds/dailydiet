import { Avatar, AvatarStack, HStack, Logo } from './styles';

export function Header() {
  return (
    <HStack>
      <Logo source={require('~/assets/logo.png')} />
      <AvatarStack>
        <Avatar source={{ uri: 'https://github.com/gstvds.png' }} />
      </AvatarStack>
    </HStack>
  );
}
