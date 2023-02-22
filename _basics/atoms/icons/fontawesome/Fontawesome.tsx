import React, { FC, ReactElement } from 'react';
import { IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FontawesomeProps } from '@/interfaces';
import { IconSize } from '@/types/IconSize';
import { SizeProp } from '@fortawesome/fontawesome';
import { StyledFontawesome } from './Fontawesome.styles';

library.add(fal, far, fas);

// eslint-disable-next-line @typescript-eslint/naming-convention
const ICON_SIZE_MAP: { [key in IconSize]: SizeProp } = {
  tiny: 'xs',
  small: '1x',
  normal: 'lg',
  large: '2x',
  huge: '3x',
};

const iconPrefixes: { [key: string]: IconPrefix } = {
  light: 'fal',
  regular: 'far',
  solid: 'fas',
};

const Fontawesome: FC<FontawesomeProps> = (props): ReactElement => {
  const { iconStyle = 'regular', iconName = 'circle', iconSize } = props;
  const iconPrefix = iconPrefixes[iconStyle];

  return (
    <StyledFontawesome {...props}>
      <FontAwesomeIcon
        fixedWidth
        icon={[iconPrefix, iconName]}
        size={iconSize && ICON_SIZE_MAP[iconSize]}
      />
    </StyledFontawesome>
  );
};

export default Fontawesome;
