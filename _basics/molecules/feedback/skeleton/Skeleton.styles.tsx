import styled from 'styled-components';
import { SkeletonProps } from '@/interfaces';

export const StyledSkeleton = styled.span.attrs((props: SkeletonProps) => ({
  skeletonType: props.skeletonType || 'paragraph',
}))`
  display: flex;
  overflow: hidden;
  width: ${(props): string =>
    props.theme.components?.skeleton?.[props.skeletonType]?.width || '100%'};
  height: ${(props): string =>
    props.theme.components?.skeleton?.[props.skeletonType]?.height || '30px'};
  margin-top: ${(props): string =>
    props.theme.components?.skeleton?.[props.skeletonType]?.marginTop ||
    '10px'};
  margin-bottom: ${(props): string =>
    props.theme.components?.skeleton?.[props.skeletonType]?.marginBottom ||
    '10px'};
`;
