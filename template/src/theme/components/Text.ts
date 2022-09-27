import { ComponentStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const Text: ComponentStyleConfig = {
  variants: {
    modalLink: ({ colorMode }: StyleFunctionProps) => ({
      cursor: 'pointer',
      outline: '2px solid transparent',
      outlineOffset: '2px',
      color: colorMode === 'light' ? 'cyan.600' : 'cyan.200',
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: colorMode === 'light' ? 'cyan.800' : 'cyan.400',
        textDecoration: 'underline',
      },
      _focus: {
        color: colorMode === 'light' ? 'cyan.800' : 'cyan.400',
        boxShadow: 'outline',
      },
    }),
  },
};

export default Text;
