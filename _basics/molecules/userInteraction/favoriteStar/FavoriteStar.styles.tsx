import styled from 'styled-components';
import { FavoriteStarLabelPosition } from '@/types/FavoriteStarLabelPosition';
import { FavoriteStarProps } from '@/interfaces';

const isLabelBeforeIcon = (
  favoriteStarLabelPosition: FavoriteStarLabelPosition,
) => favoriteStarLabelPosition && favoriteStarLabelPosition === 'before';

export const StyledFavoriteStar = styled.div.attrs(
  (props: FavoriteStarProps) => ({
    favoriteStarLabelPosition: props.favoriteStarLabelPosition,
  }),
)`
  & {
    display: flex;
    align-items: baseline;
    flex-direction: ${(props) =>
      isLabelBeforeIcon(props.favoriteStarLabelPosition)
        ? 'row-reverse'
        : 'row'};
    justify-content: ${(props) =>
      isLabelBeforeIcon(props.favoriteStarLabelPosition)
        ? 'flex-end'
        : 'flex-start'};

    & > *:first-child {
      margin-right: ${(props) =>
        isLabelBeforeIcon(props.favoriteStarLabelPosition) ? '0' : '10px'};
    }

    & > *:last-child {
      margin-right: ${(props) =>
        isLabelBeforeIcon(props.favoriteStarLabelPosition) ? '10px' : '0'};
    }
  }
`;
