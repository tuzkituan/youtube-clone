// global styles
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    html: {
      fontSize: '14px',
    },
    // styles for the `body`
    body: {
      bg: mode('mainBgColorLight', 'mainBgColorDark')(props),
      color: mode('black', 'white')(props),
    },
    // styles for the `a`
    a: {
      color: 'teal.500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
};

export default styles;
