import { Button } from '../../atoms/Button/ButtonStyles'
import { Error } from '../../atoms/ErrorMessage/ErrorMessageStyles'
import { Form } from '../../atoms/Form/FormStyles'
import { Input } from '../../atoms/Input/InputStyles'
import { UserFormTypes } from '../../../../types/types'
import { useUserForm } from '../../../../hooks/useUserForm'
// import { GoogleLogin } from 'react-google-login'

interface UserFormProps {
  type: UserFormTypes
}

export const UserForm = ({ type }: UserFormProps) => {
  const {
    disabledSubmit,
    emailError,
    handleOnChange,
    handleOnSubmit,
    nameError,
    passwordError,
    values,
  } = useUserForm(type)

  const titleOfLogin = type === 'login' ? 'Login' : 'Register'

  // const clientId = '272488292820-c57lkteo83iad88r273fajl5299talrf.apps.googleusercontent.com'

  // const onSuccess = (res) => {
  //   console.log('Logged in successfully!', res.profileObj)
  // }

  // const onFailure = () => {
  //   console.log('Failed to log in!')
  // }

  return (
    <>
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
            type={'password'}
            value={values.password}
          />
          <Error>{passwordError}</Error>

          <Button width={'100%'} fontWeight={'bold'} type="submit" disabled={disabledSubmit}>
            {type === 'register' ? 'Registrarse' : 'Iniciar sesión'}
          </Button>
        </Form>
        <hr />
        {/* <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      /> */}
      </>
    </>
  )
}
