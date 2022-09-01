import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import Video from 'components/Video';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  fetchRelatedVideos,
  fetchVideoInfo,
  getRelatedVideosState,
  getVideoInfoState,
} from 'store/actions/videoSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import DislikeIcon from '../../../public/images/ic_dislike.svg';
import DownloadIcon from '../../../public/images/ic_download.svg';
import LikeIcon from '../../../public/images/ic_like.svg';
import ShareIcon from '../../../public/images/ic_share.svg';

const ViewVideo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const relatedVideos = useAppSelector(getRelatedVideosState);
  const videoInfo = useAppSelector(getVideoInfoState);

  useEffect(() => {
    if (id) {
      dispatch(fetchVideoInfo(id));
      dispatch(fetchRelatedVideos(id));
    }
  }, [id]);

  const buttons = [
    {
      label: 'Like',
      icon: <LikeIcon />,
    },
    {
      label: 'Dislike',
      icon: <DislikeIcon />,
    },
    {
      label: 'Download',
      icon: <DownloadIcon />,
    },
    {
      label: 'Share',
      icon: <ShareIcon />,
    },
    // {
    //   label: 'Save',
    //   icon: <SaveIcon />,
    // },
  ];

  return (
    <MainLayout>
      <Grid
        gap={8}
        w="100%"
        h="100%"
        paddingBlock={8}
        paddingInline={44}
        bgColor="mainBgColorDark"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          rowSpan={12}
          colSpan={{
            sm: 12,
            lg: 8,
          }}
        >
          <Box h="60%">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box paddingBlock={4}>
            <Text fontWeight="bold" color="#fff" fontSize="16px">
              {videoInfo?.snippet?.title}
            </Text>
            <Flex
              gap={4}
              marginTop={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="secondaryColor">
                0 views - {videoInfo?.snippet?.publishedAt}
              </Text>
              <Flex gap={4}>
                {buttons.map((x) => {
                  return (
                    <Button
                      leftIcon={x.icon}
                      key={x.label}
                      textTransform="uppercase"
                    >
                      {x.label}
                    </Button>
                  );
                })}
              </Flex>
            </Flex>
          </Box>
          <Divider />

          <Flex paddingBlock={4} gap={8} justifyContent="space-between">
            <Flex gap={4} alignItems="center">
              <Box w="44px">
                <Avatar />
              </Box>
              <Stack spacing={1}>
                <Text fontWeight="bold">
                  {videoInfo?.snippet?.channelTitle}
                </Text>
                <Text fontSize="12px" color="secondaryColor">
                  0 subscribers
                </Text>
              </Stack>
            </Flex>
            <Button bgColor="primaryColor" borderRadius="30px">
              Subscribe
            </Button>
          </Flex>
          <Flex paddingBlock={4} gap={4}>
            <Box w="44px"></Box>
            <Text color="secondaryColor">
              {videoInfo?.snippet?.description}
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{
            sm: 12,
            lg: 4,
          }}
          rowSpan={12}
        >
          <Box paddingBlock={4}>
            <Text fontWeight="bold" color="#aaaaaa">
              Related videos
            </Text>
          </Box>
          <Flex direction="column" gap={4}>
            {(relatedVideos || [])?.map((item: any) => {
              return <Video item={item} key={item.id?.videoId} horizontal />;
            })}
          </Flex>
        </GridItem>
      </Grid>
    </MainLayout>
  );
};

export default ViewVideo;
