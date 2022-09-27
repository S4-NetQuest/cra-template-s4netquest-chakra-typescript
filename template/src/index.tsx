/* eslint-disable no-console */
import 'react-app-polyfill/stable';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { HashRouter as Router } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from 'theme';
import Fonts from 'components/Fonts';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';

// recoil debugger
const DebugObserver = (): null => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    try {
      const nodes = snapshot && snapshot.isRetained() ? snapshot.getNodes_UNSTABLE({ isModified: true }) : [];
      // eslint-disable-next-line no-restricted-syntax
      for (const node of nodes) {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    } catch (e) {
      console.error(e);
    }
  }, [snapshot]);

  return null;
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <HelmetProvider>
      <RecoilRoot>
        {
          parseInt(process.env.REACT_APP_DEBUG_RECOIL as string, 10) === 1 ? (
            <DebugObserver />
          ) : null
        }
        <ChakraProvider theme={theme}>
          <Fonts />
          <Router basename={process.env.REACT_APP_ROUTE_BASENAME}>
            <App />
          </Router>
        </ChakraProvider>
      </RecoilRoot>
    </HelmetProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.REACT_APP_BUILD_ENV === 'development') {
  reportWebVitals(console.debug);
}
