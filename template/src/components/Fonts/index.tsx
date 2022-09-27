import { Global } from '@emotion/react';
import latoBlackTtf from './Lato-Black.ttf';
import latoBlackItalicTtf from './Lato-BlackItalic.ttf';
import latoBoldTtf from './Lato-Bold.ttf';
import latoBoldItalicTtf from './Lato-BoldItalic.ttf';
import latoRegularTtf from './Lato-Regular.ttf';
import latoItalicTtf from './Lato-Italic.ttf';
import latoLightTtf from './Lato-Light.ttf';
import latoLightItalicTtf from './Lato-LightItalic.ttf';
import latoThinTtf from './Lato-Thin.ttf';
import latoThinItalicTtf from './Lato-ThinItalic.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 900;
        src: url(${latoBlackTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 900;
        font-style: italic;
        src: url(${latoBlackItalicTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 700;
        src: url(${latoBoldTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 700;
        font-style: italic;
        src: url(${latoBoldItalicTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 400;
        src: url(${latoRegularTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 400;
        font-style: italic;
        src: url(${latoItalicTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 300;
        src: url(${latoLightTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 300;
        font-style: italic;
        src: url(${latoLightItalicTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 100;
        src: url(${latoThinTtf}) format("ttf");
      }

      @font-face {
        font-family: "Lato";
        font-display: swap;
        font-weight: 100;
        font-style: italic;
        src: url(${latoThinItalicTtf}) format("ttf");
      }
    `}
  />
);

export default Fonts;
