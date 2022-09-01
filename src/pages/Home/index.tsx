import HomeVideos from 'components/HomeVideos';
import Tags from 'components/Tags';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getSearchResult, searchVideos } from 'store/actions/homeSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector(getSearchResult);

  useEffect(() => {
    if (Object.keys(videos || {}).length === 0) {
      dispatch(searchVideos('lofi'));
    }
  }, []);

  return (
    <MainLayout>
      <Tags />
      <HomeVideos />
    </MainLayout>
  );
};

export default Home;
