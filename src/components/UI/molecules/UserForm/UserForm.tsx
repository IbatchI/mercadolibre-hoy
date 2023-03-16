import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Button } from '../../atoms/Button/Button'
import { Error } from '../../atoms/ErrorMessage/ErrorMessageStyles'
import { Form } from '../../atoms/Form/FormStyles'
import { Input } from '../../atoms/Input/Input'
import { UserFormTypes } from '../../../../types/types'
import { useUserForm } from '../../../../hooks/useUserForm'
import { useAppSelector } from '../../../../store/hooks'
import { H1 } from '../../../../styles/SearchResultsStyles'
import { useNavigate } from 'react-router-dom'
import { FooterForm, RegisterButton } from './UserFormStyles'

interface UserFormProps {
  type: UserFormTypes
}

export const UserForm = ({ type }: UserFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const history = useNavigate()
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

  const { password, email, name } = values

  const titleOfLogin = type === 'login' ? 'Loguearse' : 'Registrarse'

  return (
    <>
      <Form onSubmit={handleOnSubmit} width={'40%'}>
        <H1>{titleOfLogin}</H1>
        {type === 'register' && (
          <Input
            error={nameError}
            height={'50px'}
            id="name"
            loading={loading}
            name="name"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            placeholder="Name"
            required
            type="text"
            value={name}
          />
        )}
        <Input
          error={emailError}
          height={'50px'}
          id="email"
          loading={loading}
          name="email"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={'Correo electrónico'}
          required
          type={'email'}
          value={email}
        />

        <Input
          error={passwordError}
          handleOnClickIcon={() => {
            setShowPassword(!showPassword)
          }}
          height={'50px'}
          icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          id="password"
          loading={loading}
          name="password"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={'Contraseña'}
          required
          type={showPassword ? 'text' : 'password'}
          value={password}
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
        {type === 'login' ? (
          <FooterForm>
            Si aún no estas registrado,{' '}
            <RegisterButton onClick={() => history('/register')}>registrate</RegisterButton>
          </FooterForm>
        ) : null}
      </Form>
    </>
  )
}
