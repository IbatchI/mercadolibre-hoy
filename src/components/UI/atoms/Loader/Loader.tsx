import { StyledLoader, StyledLoaderContainer } from './LoaderStyles'

interface ILoaderProps {
  width?: string
  height?: string
  isLocalLoader?: boolean
}

export const Loader = ({ height, isLocalLoader, width }: ILoaderProps) => {
  return (
    <>
      {isLocalLoader ? (
        <StyledLoader />
      ) : (
        <StyledLoaderContainer>
          <StyledLoader height={height} isLocalLoader={isLocalLoader} width={width} />
        </StyledLoaderContainer>
      )}
    </>
  )
}
