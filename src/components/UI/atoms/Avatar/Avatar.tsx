import { StyledAvatar } from './AvatarStyles'

interface IAvatarProps {
  alt: string
  handleOnClick(): void
  heigth?: string
  src: string
  width?: string
}

export const Avatar = ({ heigth, width, src, alt, handleOnClick }: IAvatarProps) => (
  <StyledAvatar alt={alt} heigth={heigth} onClick={handleOnClick} src={src} width={width} />
)
