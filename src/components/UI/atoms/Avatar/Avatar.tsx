import { StyledAvatar } from './AvatarStyles'

interface IAvatarProps {
  alt: string
  handleOnClick(): void
  heigth?: string
  src: string
  width?: string
}

export const Avatar = ({ heigth, width, src, alt, handleOnClick }: IAvatarProps) => (
  <StyledAvatar heigth={heigth} width={width} src={src} alt={alt} onClick={handleOnClick} />
)
