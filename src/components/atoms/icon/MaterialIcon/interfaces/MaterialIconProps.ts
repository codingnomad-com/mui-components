import type { Color } from '~/types/Color';
import type { MaterialIconName } from '../types/MaterialIconName';

export interface MaterialIconProps {
  iconName: MaterialIconName;
  color?: Color;
}
