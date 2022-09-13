export const mediaQuerys = {
  greaterThanMobile: '@media screen and (min-width: 55rem)',
  greaterThanTablet: '@media screen and (min-width: 75rem)',
  greaterThanDesktop: '@media screen and (min-width: 100rem)',
}

export const mainTheme = {
  colors: {
    bgInputColor: 'var(--mainBgInputColor)',
    borderColor: 'var(--mainBorderColor)',
    buttonBackgroundColor: 'var(--mainButtonBackgroundColor)',
    buttonHoverBackgroundColor: 'var(--mainButtonHoverBackgroundColor)',
    buttonTextColor: 'var(--mainButtonTextColor)',
    primaryColor: 'var(--mainPrimaryColor)',
    secondaryColor: 'var(--mainSecondaryColor)',
    navBarBackgroundColor: 'var(--mainNavBarBackgroundColor)',
    textColor: 'var(--mainTextColor)',
  },

  mainBorderRadius: '0.6rem',

  padding: {
    small: '0.5rem',
    smallXY: '0.5rem 1rem',
    medium: '1rem',
    large: '1.5rem',
  },

  fontSizes: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },

  fontWeights: {
    light: '300',
    normal: '400',
    bold: '700',
  },

  lineHeights: {
    small: '1.5rem',
    medium: '2rem',
    large: '3rem',
  },
}
const size = {
  tablet: '768px',
  tabletL: '1024px',
  desktop: '1256px',
}

export const deviceSize = {
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  desktop: `(max-width: ${size.desktop})`,
}
