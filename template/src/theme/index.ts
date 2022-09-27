import { extendTheme, ThemeOverride } from '@chakra-ui/react';

// theme config
import config from './config';

// Foundational style overrides
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';

// Global style overrides
import styles from './styles';

// Custom components and variants
import components from './components';

const overrides: ThemeOverride = {
  config,
  colors,
  fonts,
  shadows,
  styles,
  components,
};

export default extendTheme(overrides);
