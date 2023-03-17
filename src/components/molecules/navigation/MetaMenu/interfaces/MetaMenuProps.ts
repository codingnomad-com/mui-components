import { MenuProps as MuiMetaMenuProps } from '@mui/material/Menu';
import { ReactElement } from 'react';
import type { Divider } from '~/atoms/layout/Divider/Divider';
import { MenuItem } from '../MenuItem';

type MetaMenuBaseProps = Pick<
  MuiMetaMenuProps,
  'anchorEl' | 'open' | 'onClose' | 'variant'
>;

export interface MetaMenuProps extends MetaMenuBaseProps {
  children:
    | ReactElement<typeof MenuItem>
    | ReactElement<typeof MenuItem>[]
    | ReactElement<typeof Divider>;
}
