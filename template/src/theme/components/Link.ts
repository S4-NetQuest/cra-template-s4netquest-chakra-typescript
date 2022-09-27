import { ComponentStyleConfig } from '@chakra-ui/react';

const Link: ComponentStyleConfig = {
  variants: {
    default: ({ colorScheme = 'cyan', colorMode }) => ({
      color: colorMode === 'light' ? `${colorScheme}.600` : `${colorScheme}.200`,
      _hover: {
        color: colorMode === 'light' ? `${colorScheme}.800` : `${colorScheme}.400`,
      },
      _focus: {
        color: colorMode === 'light' ? `${colorScheme}.800` : `${colorScheme}.400`,
      },
    }),
    lightCyan: ({ colorScheme = 'cyan', colorMode }) => ({
      color: colorMode === 'light' ? `${colorScheme}.100` : `${colorScheme}.200`,
      textDecoration: 'underline',
      _hover: {
        color: colorMode === 'light' ? `${colorScheme}.300` : `${colorScheme}.400`,
      },
      _focus: {
        color: colorMode === 'light' ? `${colorScheme}.300` : `${colorScheme}.400`,
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Link;
