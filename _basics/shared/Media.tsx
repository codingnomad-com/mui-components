/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Breakpoints } from '@/types/Breakpoints';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const breakpoints: { [key in Breakpoints]: number } = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
};

export const mediaQuery = (
  breakpoint: 'xs' | 'sm' | 'md' | 'lg',
  style: string,
) => `@media (max-width: ${breakpoints[breakpoint] || '0'}px) {
      ${style}
    }`;

const Media = {
  xs: (styles: any) => `
    @media only screen and (max-width: ${breakpoints.xs}px) {
      ${styles}
    }
  `,
  sm: (styles: any) => `
    @media only screen and (min-width: ${
      breakpoints.xs + 1
    }px) and (max-width: ${breakpoints.sm}px) {
      ${styles}
    }
  `,
  md: (styles: any) => `
    @media only screen and (min-width: ${
      breakpoints.sm + 1
    }px) and (max-width: ${breakpoints.md}px) {
      ${styles}
    }
  `,
  lg: (styles: any) => `
    @media only screen and (min-width: ${
      breakpoints.md + 1
    }px) and (max-width: ${breakpoints.lg}px) {
      ${styles}
    }
  `,
  xl: (styles: any) => `
    @media only screen and (min-width: ${breakpoints.lg + 1}px) {
      ${styles}
    }
  `,
};

export default Media;
