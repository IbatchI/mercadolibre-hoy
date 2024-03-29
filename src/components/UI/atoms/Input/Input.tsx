import { InputHTMLAttributes } from 'react'
import { Error } from '../ErrorMessage/ErrorMessageStyles'
import { Label } from '../Label/Label'
import {
  StyledInput,
  StyledInputContainer,
  InputButtonIcon,
  InputContainer,
  InputRightSpinner,
} from './InputStyles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  handleOnClickIcon?(): void
  height?: string
  icon?: React.ReactNode
  minWidth?: string
  padding?: string
  loading?: boolean
  width?: string
  label?: boolean
}

export const Input = ({
  error,
  handleOnClickIcon,
  height,
  icon,
  minWidth,
  padding,
  width,
  loading,
  ...rest
}: IInputProps) => {
  const { name, disabled, placeholder } = rest
  return (
    <InputContainer>
      <Label htmlFor={name || ''}>{placeholder?.toUpperCase()}</Label>
      <StyledInputContainer
        error={error}
        height={height}
        minWidth={minWidth}
        padding={padding}
        width={width}
      >
        <StyledInput
          disabled={loading || disabled}
          error={error}
          height={height}
          icon={icon}
          minWidth={minWidth}
          padding={padding}
          width={width}
          {...rest}
        />
        {icon && !loading && (
          <InputButtonIcon onClick={handleOnClickIcon} type="button">
            {icon}
          </InputButtonIcon>
        )}

        {loading && <InputRightSpinner />}
      </StyledInputContainer>
      {error && <Error>{error}</Error>}
    </InputContainer>
  )
}
