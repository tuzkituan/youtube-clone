import { Box, Container, Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const PageLoading: FC = () => {
  return (
    <Container centerContent>
      <Flex
        padding="4"
        maxW="md"
        h="30vh"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="primaryColor" />
      </Flex>
    </Container>
  );
};

export default PageLoading;
