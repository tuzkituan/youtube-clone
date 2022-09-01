import { mode } from '@chakra-ui/theme-tools';

const Modal = {
  baseStyle: (props: any) => ({
    dialog: {
      bg: mode('componentBgColorLight', 'componentBgColorDark')(props),
    }
  })
}

export default Modal;
