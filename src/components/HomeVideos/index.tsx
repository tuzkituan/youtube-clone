import { Flex, SimpleGrid } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSearchResult } from 'store/actions/homeSlice';
import Video from '../Video';

const HomeVideos: FC = () => {
  const searchResult = useSelector(getSearchResult);
  const { items = [] } = searchResult;

  return (
    <Flex gap={4} padding={8} bgColor="mainBgColorDark">
      <SimpleGrid columns={4} gap={8}>
        {items.map((item: any) => {
          return <Video item={item} key={item.id} horizontal={false} />;
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default HomeVideos;
