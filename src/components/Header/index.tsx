import {
  Avatar,
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
} from '@chakra-ui/react';
import { FC } from 'react';
import AddVideoIcon from '../../../public/images/ic_add_video.svg';
import BellIcon from '../../../public/images/ic_bell.svg';
import MenuIcon from '../../../public/images/ic_menu.svg';
import VoiceIcon from '../../../public/images/ic_voice.svg';
import SearchIcon from '../../../public/images/ic_search.svg';
import Logo from '../../../public/images/youtube_logo.svg';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'store/hooks';
import { searchVideos } from 'store/actions/homeSlice';

const SPACING = 6;
interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(searchVideos(e.target.value));
      router.push('/');
    }
  };

  return (
    <Flex
      as="header"
      position="fixed"
      w="100%"
      top={0}
      gap={SPACING}
      paddingBlock={3}
      paddingInline={8}
      bgColor="componentBgColorDark"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="borderColorDark"
    >
      <Center>
        <Box cursor="pointer" onClick={toggleSidebar}>
          <MenuIcon />
        </Box>
      </Center>
      <Center>
        <Box cursor="pointer" onClick={() => router.push('/')}>
          <Logo />
        </Box>
      </Center>
      <Spacer />
      <Flex alignItems="center" gap={4}>
        <Center w="35vw">
          <InputGroup size="lg">
            <Input
              borderRadius={2}
              variant="filled"
              placeholder="Search"
              bgColor="mainBgColorDark"
              size="lg"
              _hover={{
                backgroundColor: 'mainBgColorDark',
              }}
              border="none"
              outline="none"
              _focus={{
                backgroundColor: 'mainBgColorDark',
              }}
              onKeyDown={onKeyDown}
            />
            <InputRightAddon borderRadius={2} cursor="pointer">
              <Box>
                <SearchIcon />
              </Box>
            </InputRightAddon>
          </InputGroup>
        </Center>
        <Center>
          <Box bg="mainBgColorDark" borderRadius="50%" padding={1}>
            <VoiceIcon />
          </Box>
        </Center>
      </Flex>
      <Spacer />
      <Flex alignItems="center" gap={SPACING}>
        <Center>
          <AddVideoIcon />
        </Center>
        <Center>
          <BellIcon />
        </Center>
        <Center>
          <Avatar size="sm" />
        </Center>
      </Flex>
    </Flex>
  );
};

export default Header;
