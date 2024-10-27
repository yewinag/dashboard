import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = Object.freeze({
  // apply ant design theme
  token: {
    colorPrimary: '#F06D24',
    colorLink: '#00AA67',
    colorPrimaryHover: '#F06D24',
    colorLinkActive: '#00AA67',
    colorLinkHover: '#00AA67',
    wireframe: false,
    fontSize: 14,
    borderRadius: 4,
    sizeStep: 4,
    fontFamily: `'Nunito', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    lineHeight: 1.5714285714285714,
    colorError: '#ED0131',
  },
  components: {
    Radio: {
      colorPrimary: '#F06D24',
    },
    Input: {
      controlHeight: 48,
      borderRadius: 4,
    },
    Button: {
      controlHeight: 48,
      borderRadius: 4,
    },
    Select: {
      controlHeight: 48,
      borderRadius: 4,
    },
    Steps: {
      colorPrimary: '#00AA67',
      // colorFillContent: "#F06D24",
      // controlItemBgActive: "#00AA67",
    },
    // not working yet
    Form: {
      backgroundColor: '#fad',
      colorPrimary: '#fad',
    },
    DatePicker: {
      controlHeight: 48,
      borderRadius: 4,
    },
  },
  // manually apply theme
  colors: {
    main: '#F06D24',
    text_primary: '#8090A9',
    text_secondary: '#5D7285',
    reject: '#ED0131',
    search: '#6E6893',
    active: '#00AA67',
    inactive: '#F06D24',
    expired: '#EB5757',
    orange: '#F06D24',
    green: '#00AA67',
    yellow: '#FADB14',
    gray: '#555555',
    white: '#F4F2FF',
  },
  screen: {
    sm: '768px',
    md: '1024px',
  },
});

export const StyledTheme = {
  colors: {
    main: '#F06D24',
    text_primary: '#8090A9',
    text_secondary: '#5D7285',
    search: '#6E6893',
    active: '#00AA67',
    inactive: '#F06D24',
    expired: '#EB5757',
    orange: '#F06D24',
    green: '#00AA67',
    yellow: '#FADB14',
    gray: '#555555',
    white: '#F4F2FF',
  },
  // screen: {
  //   sm: "768px",
  //   md: "1024px",
  // },
};
const screen = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};
export const device = {
  tablet: `(max-width: ${screen.tablet})`,
  laptop: `(max-width: ${screen.laptop})`,
  laptopL: `(max-width: ${screen.laptopL})`,
};
