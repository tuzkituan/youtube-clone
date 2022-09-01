import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { convertDateAgo } from 'utils/dates';
import { convertSecondsToHHmmss } from 'utils/time';

interface VideoProps {
  item: {
    id: {
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      title: string;
      description: string;
      thumbnails: any;
      channelTitle: string;
    };
  };
  horizontal: boolean;
}
const Video: FC<VideoProps> = ({ item, horizontal }) => {
  const router = useRouter();

  const viewVideo = () => {
    router.push(`/view/${item.id?.videoId}`);
  };
  return (
    <Box key={item.id?.videoId} cursor="pointer" onClick={viewVideo}>
      <Flex gap={4} direction={horizontal ? 'row' : 'column'}>
        <Box position="relative">
          <Box
            w={horizontal ? '140px' : '100%'}
            h={horizontal ? '80px' : '200px'}
          >
            <Image
              src={item.snippet?.thumbnails?.medium?.url}
              alt=""
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            bg="#000"
            position="absolute"
            right="5px"
            bottom="5px"
            fontSize={11}
            fontWeight="bold"
            paddingInline={1}
          >
            00:00
            {/* {convertSecondsToHHmmss(item.videoLength)} */}
          </Box>
        </Box>
        <Flex gap={4}>
          {!horizontal && <Avatar size="sm" />}
          <Flex direction="column" gap={1}>
            <Text fontWeight="bold">{item.snippet?.title}</Text>
            <Text
              fontSize="12px"
              color="secondaryColor"
              textOverflow="ellipsis"
              noOfLines={1}
              w="100%"
            >
              {item.snippet?.channelTitle}
            </Text>
            <Text fontSize="12px" color="secondaryColor">
              45K views - {convertDateAgo(item.snippet?.publishedAt)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Video;
