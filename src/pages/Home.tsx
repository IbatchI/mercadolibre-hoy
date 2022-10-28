import { UserForm } from '../components/UI/molecules/UserForm/UserForm'

interface IHomeProps {
  isAuth: boolean
}
export const Home = ({ isAuth }: IHomeProps) => {
  return isAuth ? <h1>Estoy logueado</h1> : <UserForm type="login" />
}
