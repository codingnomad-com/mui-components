import { FC } from 'react';
import { Box } from '~/atoms/layout/Box/Box';
import { ImageProps } from './interfaces/ImageProps';

export const Image: FC<ImageProps> = (props) => {
  const { alt, sx, ...rest } = props;

  return (
    <Box sx={sx}>
      <img style={{ width: '100%' }} alt={alt} {...rest} />
    </Box>
  );
};

export default Image;
