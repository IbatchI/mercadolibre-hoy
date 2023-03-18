export const mediaQuerys = {
  greaterThanMobile: '@media screen and (min-width: 55rem)',
  greaterThanTablet: '@media screen and (min-width: 75rem)',
  greaterThanDesktop: '@media screen and (min-width: 100rem)',
}

export const mainTheme = {
  colors: {
    defaultBackgroundColor: 'var(--mainBackgroundColor)',
    formBackgroundColor: 'var(--mainSecondaryBackgroundColor)',
    borderColors: 'var(--mainBorderColor)',
    primaryTextColor: 'var(--mainTextColor)',
    inputBackgroundColor: 'var(--mainBackgroundInputColor)',
    disabledColor: 'var(--mainDisabledColor)',
    primaryColor: 'var(--mainPrimaryColor)',
    secondaryColor: 'var(--mainSecondaryColor)',
    ternaryColor: 'var(--mainTernaryColor)',
    dangerColor: 'var(--mainDangerColor)',
    // Skeleton colors
    skeletonBackgroundColor: 'var(--mainSkeletonBackgroundColor)',
    skeletonHighlightColor: 'var(--mainSkeletonHighlightColor)',
  },

  mainBorderRadius: '0.3rem',
  mainShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',

  padding: {
    small: '0.5rem',
    smallXY: '0.5rem 1rem',
    medium: '1rem',
    large: '1.5rem',
  },

  fontSizes: {
    xSmall: '0.8rem',
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
  mobile: '500px',
  tablet: '900px',
  tabletL: '1024px',
  desktop: '1256px',
}

export const deviceSize = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  desktop: `(max-width: ${size.desktop})`,
}
