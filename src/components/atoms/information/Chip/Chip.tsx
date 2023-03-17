import MuiChip from '@mui/material/Chip';
import { FC } from 'react';
import { ChipProps } from './interfaces/ChipProps';

export const Chip: FC<ChipProps> = (props) => {
  const { ...rest } = props;

  return <MuiChip {...rest} />;
};

export default Chip;
