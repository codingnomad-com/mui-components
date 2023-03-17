import * as MUIIcons from '@mui/icons-material';
import { createElement, FC } from 'react';
import { MaterialIconProps } from './interfaces/MaterialIconProps';

export const MaterialIcon: FC<MaterialIconProps> = (props) => {
  const { iconName } = props;

  return createElement(MUIIcons[iconName], props);
};

export default MaterialIcon;
