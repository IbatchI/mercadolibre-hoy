import { InputHTMLAttributes } from 'react'
import { StyledInput, StyledInputContainer, InputButtonIcon } from './InputStyles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleOnClickIcon?(): void
  height?: string
  icon?: React.ReactNode
  minWidth?: string
  padding?: string
  width?: string
}

export const Input = ({
  handleOnClickIcon,
  height,
  icon,
  minWidth,
  padding,
  width,
  ...rest
}: IInputProps) => {
  return (
    <>
      {!icon ? (
        <StyledInput
          height={height}
          minWidth={minWidth}
          padding={padding}
          width={width}
          {...rest}
        />
      ) : (
        <StyledInputContainer height={height} minWidth={minWidth} padding={padding} width={width}>
          <StyledInput
            height={height}
            minWidth={minWidth}
            padding={padding}
            width={width}
            icon={icon}
            {...rest}
          />
          <InputButtonIcon onClick={handleOnClickIcon} type="button">
            {icon}
          </InputButtonIcon>
        </StyledInputContainer>
      )}
    </>
  )
}
