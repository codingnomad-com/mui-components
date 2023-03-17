import MuiImageList from '@mui/material/ImageList';
import { FC } from 'react';
import { ImageListProps } from './interfaces/ImageListProps';

export const ImageList: FC<ImageListProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiImageList {...rest}>{children}</MuiImageList>;
};

export default ImageList;
