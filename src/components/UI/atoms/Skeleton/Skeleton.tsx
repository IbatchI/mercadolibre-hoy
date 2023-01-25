import { StyledSkeleton } from './SkeletonStyles'

export interface SkeletonProps {
  width?: string
  height?: string
  borderRadius?: string
}
export const Skeleton = ({ ...props }: SkeletonProps) => {
  return <StyledSkeleton {...props} />
}
