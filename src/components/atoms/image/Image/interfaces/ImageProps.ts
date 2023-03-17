import { SxProps } from '@mui/material';

export interface ImageProps {
  alt: string;
  loading?: 'eager' | 'lazy';
  src: string;
  srcSet?: string;
  sx?: SxProps;
}
