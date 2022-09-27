import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

const global = (props: GlobalStyleProps) => ({
  html: {
    background: '#c7c7c7',
    height: '100%',
  },
  body: {
    bg: mode('gray.300', 'gray.500')(props),
    bgGradient: mode('linear-gradient(to-bl, gray.200, gray.600)', 'linear-gradient(to-bl, gray.500, gray.800)')(props),
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
});

export default global;
