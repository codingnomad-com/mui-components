import { ImageListItem } from '@mui/material';
import { ImageListProps as MuiImageListProps } from '@mui/material/ImageList';
import { ReactElement } from 'react';

type ImageListBaseProps = Pick<
  MuiImageListProps,
  'cols' | 'gap' | 'rowHeight' | 'variant'
>;

export interface ImageListProps extends ImageListBaseProps {
  children: ReactElement<typeof ImageListItem>;
}
