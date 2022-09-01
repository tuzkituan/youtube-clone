import { ChakraProvider } from '@chakra-ui/react';
import Fonts from 'fonts/index.js';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import '../src/assets/scss/styles.scss';
import { store } from '../src/store';
import theme from '../themes';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#ff0000"
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

const AppWrapper = (props: any) => {
  return (
    <Provider store={store}>
      <Fonts />
      <App {...props} />
    </Provider>
  );
};

export default AppWrapper;
