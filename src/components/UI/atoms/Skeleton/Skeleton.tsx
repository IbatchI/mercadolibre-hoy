import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { mainTheme } from '../../../../styles/Styles'

export interface SkeletonProps {
  height?: string
  width?: string
  baseColor?: string
  highlightColor?: string
  quantity?: number
}

export const MySkeleton = ({
  height,
  highlightColor,
  baseColor,
  quantity,
  width,
}: SkeletonProps) => {
  // array que contiene el numero de elementos a renderizar, junto con su clave unica
  // tiene la siguiente estructura [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}]
  const auxArray = Array(quantity).fill(0)
  const skeletonArray = auxArray.map((_, index) => ({ id: index }))

  return (
    <>
      {skeletonArray.map((skeletonItem) => (
        <SkeletonTheme
          baseColor={baseColor ?? mainTheme.colors.skeletonBackgroundColor}
          highlightColor={highlightColor ?? mainTheme.colors.skeletonHighlightColor}
          key={skeletonItem.id}
        >
          <Skeleton count={1} height={height} width={width ?? ''} />
        </SkeletonTheme>
      ))}
    </>
  )
}
