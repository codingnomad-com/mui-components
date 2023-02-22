import { FC } from 'react';

import { HiddenProps } from '@/interfaces';

const Hidden: FC<HiddenProps> = (props: HiddenProps) => {
  const { children, hidden } = props;

  if (!hidden) {
    return children;
  }

  return null;
};

export default Hidden;
