import { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

type AvatarBaseProps = Pick<
  MuiAvatarProps,
  'alt' | 'children' | 'sizes' | 'src' | 'srcSet' | 'variant'
>;

export type AvatarProps = AvatarBaseProps;
