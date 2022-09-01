import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Tags: FC = () => {
  const tags = [
    'All',
    'Mixes',
    'Gaming',
    'Music',
    'Live',
    'Nobita Nobi',
    'Humans',
    'PUBG',
    'Apple',
    'Animated films',
    'Computer Hardware',
    'Youth Music',
  ];
  return (
    <Flex
      gap={2}
      paddingBlock={4}
      paddingInline={8}
      borderBottom="1px solid"
      borderColor="borderColorDark"
      bgColor="componentBgColorDark"
      alignItems="center"
    >
      {tags.map((x) => (
        <Button
          paddingBlock={2}
          paddingInline={4}
          border="1px solid"
          borderColor="borderColorDark"
          borderRadius={30}
          key={x}
        >
          {x}
        </Button>
      ))}
    </Flex>
  );
};

export default Tags;
