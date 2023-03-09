import { CheckboxStyle, StyleCheckboxContainter } from './ChecboxStyles'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <>
      <StyleCheckboxContainter>
        {label}
        <CheckboxStyle {...props} label={label} />
      </StyleCheckboxContainter>
    </>
  )
}
