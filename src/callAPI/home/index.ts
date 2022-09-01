import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
  params = {},
  query,
}) => {
  return {
    props: {
      data: {},
    },
  };
};

export default getServerSideProps;
