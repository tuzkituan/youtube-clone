import HomeVideos from 'components/HomeVideos';
import Tags from 'components/Tags';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { searchVideos } from 'store/actions/homeSlice';
import { useAppDispatch } from 'store/hooks';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchVideos('lofi'));
  }, []);

  return (
    <MainLayout>
      <Tags />
      <HomeVideos />
    </MainLayout>
  );
};

export default Home;
