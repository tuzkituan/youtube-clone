import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import HomeIcon from '../../../public/images/ic_home.svg';
import ExploreIcon from '../../../public/images/ic_explore.svg';
import ShortsIcon from '../../../public/images/ic_shorts.svg';
import SubscriptionIcon from '../../../public/images/ic_subscriptions.svg';
import LibraryIcon from '../../../public/images/ic_library.svg';
import HistoryIcon from '../../../public/images/ic_history.svg';
import YourVideosIcon from '../../../public/images/ic_your_videos.svg';
import WatchLaterIcon from '../../../public/images/ic_watch_later.svg';
import LikedVideosIcon from '../../../public/images/ic_liked_videos.svg';
import ShowMoreIcon from '../../../public/images/ic_show_more.svg';
import { useRouter } from 'next/router';

interface SidebarProps {
  visible: boolean;
}

const Sidebar: FC<SidebarProps> = ({ visible }) => {
  const router = useRouter();
  const path = router.asPath;

  const _renderMain = () => {
    const items = [
      {
        label: 'Home',
        icon: <HomeIcon />,
        link: '/',
      },
      {
        label: 'Explore',
        icon: <ExploreIcon />,
        link: '/explore',
      },
      {
        label: 'Shorts',
        icon: <ShortsIcon />,
        link: '/shorts',
      },
      {
        label: 'Subscriptions',
        icon: <SubscriptionIcon />,
        link: '/subscriptions',
      },
    ];

    return (
      <Flex gap={2} padding={0} direction="column">
        {items.map((item) => {
          return (
            <Button
              key={item.label}
              leftIcon={item.icon}
              iconSpacing={4}
              bg="none"
              justifyContent="flex-start"
              isActive={path === item.link}
              onClick={item.link ? () => router.push(item.link) : () => {}}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    );
  };

  const _renderUserContent = () => {
    const items = [
      {
        label: 'Library',
        icon: <LibraryIcon />,
      },
      {
        label: 'History',
        icon: <HistoryIcon />,
      },
      {
        label: 'Your videos',
        icon: <YourVideosIcon />,
      },
      {
        label: 'Watch later',
        icon: <WatchLaterIcon />,
      },
      {
        label: 'Liked videos',
        icon: <LikedVideosIcon />,
      },
      {
        label: 'Show more',
        icon: <ShowMoreIcon />,
      },
    ];
    return (
      <Flex gap={2} padding={0} direction="column">
        {items.map((item: any) => {
          return (
            <Button
              key={item.label}
              iconSpacing={4}
              leftIcon={item.icon}
              bg="none"
              justifyContent="flex-start"
              isActive={path === item.link}
              onClick={item.link ? () => router.push(item.link) : () => {}}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    );
  };

  const _renderSubscriptions = () => {
    const items = [
      {
        label: 'POPS Kids',
        icon: 'https://yt3.ggpht.com/ytc/AMLnZu_CaLKmDAOUw_PDeRGWThxG7dYCo46Aib4_gpMfIw=s88-c-k-c0x00ffffff-no-rj',
      },
      {
        label: 'FAF TV',
        icon: 'https://yt3.ggpht.com/dgZwDRAhI3JFzmKIQFr5OPemgZ2swu5QOyn1N58eSs4bLREQ1SMQ6AIwGLwajKwAClOSZKibwg=s88-c-k-c0x00ffffff-no-rj',
      },
      {
        label: 'Ciray Remix',
        icon: 'https://yt3.ggpht.com/ytc/AMLnZu9ZqreBcRp8RPW9oOYvoJ8YaE1cnA7S_jhdR7G0=s88-c-k-c0x00ffffff-no-rj',
      },
      {
        label: 'VTV24',
        icon: 'https://yt3.ggpht.com/524B3R1SLC5PWDi5GmEa6BdyF1kYEdHlc8wVVTMZ3OeUNtfh0AaFYnGF7vIb5mKeGYJKIn02GBo=s88-c-k-c0x00ffffff-no-rj',
      },
      {
        label: 'Yang Slowed Chill',
        icon: 'https://yt3.ggpht.com/oDsUSVCsu9aRYWRvevQaWAxy3GE9VuSSvS_B1i9PzMkq5Zx04Oc5rygyHzvmHN9-HAcVK8_6xQ=s88-c-k-c0x00ffffff-no-rj',
      },
      {
        label: 'Show 29 more',
        icon: <ShowMoreIcon />,
        isIcon: true,
      },
    ];
    return (
      <Flex gap={2} padding={0} direction="column">
        <Box paddingInline={4} paddingBlock={1}>
          <Text fontWeight="bold" color="secondaryColor">
            SUBSCRIPTIONS
          </Text>
        </Box>
        {items.map((item: any) => {
          return (
            <Button
              key={item.label}
              iconSpacing={4}
              leftIcon={
                item.isIcon ? (
                  item.icon
                ) : (
                  <Box w="24px" h="24px">
                    <Image
                      src={item.icon}
                      alt=""
                      w="100%"
                      borderRadius="50%"
                      objectFit="cover"
                    />
                  </Box>
                )
              }
              bg="none"
              onClick={item.link ? () => router.push(item.link) : () => {}}
              justifyContent="flex-start"
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    );
  };

  return (
    <Flex
      gap={4}
      padding={4}
      bgColor="componentBgColorDark2"
      direction="column"
      h={'calc(100vh - 64px)'}
      overflow="auto"
    >
      {_renderMain()}
      <Divider />
      {_renderUserContent()}
      <Divider />
      {_renderSubscriptions()}
    </Flex>
  );
};

export default Sidebar;
