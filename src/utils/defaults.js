const fontSansSerif = "Noto Sans,sans-serif";
const fontBase = fontSansSerif;

const fontSizeXs = 12;
const fontSizeSm = 14;
const fontSizeMd = 21;
const fontSizeLg = 28;
const fontSizeHg = 48;

const fontWeightBase = 400;
const fontWeightLight = 300;
const fontWeightMedium = 500;
const fontWeightBold = 600;

const lineHeightBase = 1.33;
const lineHeightHeading = 1.2;

const transitionBase = "all .2s ease-in-out";
const transitionFade = "opacity .15s linear";

const Defaults = {
  fontFamily: {
    sansSerif: fontSansSerif,
    base: fontBase
  },
  fontSize: {
    xs: fontSizeXs,
    sm: fontSizeSm,
    md: fontSizeMd,
    lg: fontSizeLg,
    hg: fontSizeHg
  },
  fontWeight: {
    light: fontWeightLight,
    base: fontWeightBase,
    medium: fontWeightMedium,
    bold: fontWeightBold
  },
  lineHeight: {
    base: lineHeightBase,
    heading: lineHeightHeading
  },
  transition: {
    base: transitionBase,
    opacity: transitionFade
  }
};

export default Defaults;
