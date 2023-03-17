import MenuItem from '@mui/material/MenuItem/MenuItem';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { ReactElement } from 'react';

type SelectBaseProps = Pick<
  MuiSelectProps,
  'autoWidth' | 'color' | 'onChange' | 'onClose' | 'onOpen' | 'open' | 'variant'
>;

export interface SelectProps extends SelectBaseProps {
  children: ReactElement<typeof MenuItem>[];
}
