import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { SkeletonProps } from './Skeleton'

export const StyledSkeleton = styled.div<SkeletonProps>`
  background-color: ${mainTheme.colors.secondaryColor};
  border-radius: 4px;
  height: ${(props: SkeletonProps) => props.height || '100%'};
  width: ${(props: SkeletonProps) => props.width || '100%'};
  border-radius: ${(props: SkeletonProps) => props.borderRadius || mainTheme.mainBorderRadius};

  /* animations */
  animation: pulse 1.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-color: ${mainTheme.colors.secondaryColor};
    }
    50% {
      background-color: ${mainTheme.colors.disabledColor};
    }
    100% {
      background-color: ${mainTheme.colors.secondaryColor};
    }
  }
`
