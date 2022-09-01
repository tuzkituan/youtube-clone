import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const path = router.asPath;
  useEffect(() => {
    setSidebarVisible(!path.includes('/view'));
  }, [path]);

  return (
    <div className="main-layout">
      <Head>
        <title>Youtube Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header toggleSidebar={toggleSidebar} />

      <Grid
        h="100vh"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        // gap={4}
        paddingTop="64px"
      >
        {sidebarVisible && (
          <GridItem
            rowSpan={12}
            colSpan={
              sidebarVisible
                ? {
                    sm: 4,
                    lg: 3,
                    xl: 2,
                  }
                : 12
            }
          >
            <Sidebar visible={sidebarVisible} />
          </GridItem>
        )}
        <GridItem
          rowSpan={12}
          colSpan={
            sidebarVisible
              ? {
                  sm: 8,
                  lg: 9,
                  xl: 10,
                }
              : 12
          }
        >
          <Box overflowY="auto" h={'calc(100vh - 64px)'}>
            {children}
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MainLayout;
