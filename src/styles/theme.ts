export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },

  border: {
    radius01: '0.4rem',
    radius02: '1.08rem',
    radius03: '1.7rem',
    radius04: '2.5rem',
    radius05: '5rem',
  },

  font: {
    family:
      "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,

    sizes: {
      xxsmall: '0.9rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },

  colors: {
    primary: '#6B8067',
    secondary: '#5DAC50',
    background: '#FAFAFA',

    white: '#FFFFFF',
    black: '#000000',

    gray00: '#F1F1F1',
    gray01: '#F6F6F6',
    gray02: '#F7F7F7',
    gray03: '#E8E8E8',
    gray04: '#BDBDBD',
    gray05: '#A5A5A5',
    gray06: '#979797',
    gray07: '#8D8D8D',
    gray08: '#808080',
    gray09: '#787878',
    gray10: '#535353',

    yellow: '#FFCC00',
    yellowDark: '#9E7D27',

    red: '#E84855 ',
    green: '#61CB46 ',
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6.6rem',
    huge: '8.9rem',
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
