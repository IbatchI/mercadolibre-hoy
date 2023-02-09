import { InputHTMLAttributes } from 'react'
import { Error } from '../ErrorMessage/ErrorMessageStyles'
import { StyledInput, StyledInputContainer, InputButtonIcon } from './InputStyles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  handleOnClickIcon?(): void
  height?: string
  icon?: React.ReactNode
  minWidth?: string
  padding?: string
  width?: string
}

export const Input = ({
  error,
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
      {!icon && (
        <StyledInput
          error={error}
          height={height}
          minWidth={minWidth}
          padding={padding}
          width={width}
          {...rest}
        />
      )}

      {icon && (
        <StyledInputContainer
          error={error}
          height={height}
          minWidth={minWidth}
          padding={padding}
          width={width}
        >
          <StyledInput
            error={error}
            height={height}
            icon={icon}
            minWidth={minWidth}
            padding={padding}
            width={width}
            {...rest}
          />
          <InputButtonIcon onClick={handleOnClickIcon} type="button">
            {icon}
          </InputButtonIcon>
        </StyledInputContainer>
      )}

      {error && <Error>{error}</Error>}
    </>
  )
}
