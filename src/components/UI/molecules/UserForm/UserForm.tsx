import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Button } from '../../atoms/Button/Button'
import { Error } from '../../atoms/ErrorMessage/ErrorMessageStyles'
import { Form } from '../../atoms/Form/FormStyles'
import { Input } from '../../atoms/Input/Input'
import { UserFormTypes } from '../../../../types/types'
import { useUserForm } from '../../../../hooks/useUserForm'
import { useAppSelector } from '../../../../store/hooks'

interface UserFormProps {
  type: UserFormTypes
}

export const UserForm = ({ type }: UserFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { error, loading } = useAppSelector((state) => state.user)

  const {
    disabledSubmit,
    emailError,
    handleOnBlur,
    handleOnChange,
    handleOnSubmit,
    nameError,
    passwordError,
    values,
  } = useUserForm(type)

  const titleOfLogin = type === 'login' ? 'Login' : 'Register'

  return (
    <>
      <Form onSubmit={handleOnSubmit} width={'40%'}>
        <h3>{titleOfLogin}</h3>
        {type === 'register' && (
          <Input
            disabled={loading}
            error={nameError}
            height={'50px'}
            id="name"
            name="name"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            placeholder="Name"
            required
            type="text"
            value={values.name}
          />
        )}
        <Input
          disabled={loading}
          error={emailError}
          height={'50px'}
          id="email"
          name="email"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={'Email'}
          required
          type={'email'}
          value={values.email}
        />

        <Input
          disabled={loading}
          error={passwordError}
          handleOnClickIcon={() => {
            setShowPassword(!showPassword)
          }}
          height={'50px'}
          icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          id="password"
          name="password"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={'Contraseña'}
          required
          type={showPassword ? 'text' : 'password'}
          value={values.password}
        />

        <Error>{error}</Error>
        <Button
          disabled={disabledSubmit}
          fontWeight={'bold'}
          loading={loading}
          textColor="white"
          type="submit"
          width={'100%'}
        >
          {type === 'register' ? 'Registrarse' : 'Iniciar sesión'}
        </Button>
      </Form>
    </>
  )
}
