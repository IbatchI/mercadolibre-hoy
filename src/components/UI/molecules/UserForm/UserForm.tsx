import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Button } from '../../atoms/Button/ButtonStyles'
import { Error } from '../../atoms/ErrorMessage/ErrorMessageStyles'
import { Form } from '../../atoms/Form/FormStyles'
import { Input } from '../../atoms/Input/Input'
import { UserFormTypes } from '../../../../types/types'
import { useUserForm } from '../../../../hooks/useUserForm'

interface UserFormProps {
  type: UserFormTypes
}

export const UserForm = ({ type }: UserFormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    disabledSubmit,
    emailError,
    handleOnChange,
    handleOnSubmit,
    nameError,
    passwordError,
    responseError,
    values,
  } = useUserForm(type)

  const titleOfLogin = type === 'login' ? 'Login' : 'Register'

  return (
    <>
      <Form onSubmit={handleOnSubmit} width={'40%'}>
        <h3>{titleOfLogin}</h3>
        {type === 'register' && (
          <Input
            height={'50px'}
            id="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleOnChange}
            required
          />
        )}
        <Error>{nameError}</Error>
        <Input
          height={'50px'}
          id="email"
          onChange={handleOnChange}
          placeholder={'Email'}
          type={'email'}
          value={values.email}
          required
        />
        <Error>{emailError}</Error>

        <Input
          height={'50px'}
          id="password"
          onChange={handleOnChange}
          placeholder={'Contraseña'}
          required
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          handleOnClickIcon={() => {
            setShowPassword(!showPassword)
          }}
        />
        <Error>{passwordError}</Error>

        <Error>{responseError}</Error>
        <Button width={'100%'} fontWeight={'bold'} type="submit" disabled={disabledSubmit}>
          {type === 'register' ? 'Registrarse' : 'Iniciar sesión'}
        </Button>
      </Form>
    </>
  )
}
