import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { UserForm } from '../components/UI/molecules/UserForm/UserForm'
import { H1 } from '../styles/SearchResultsStyles'

interface IHomeProps {
  isAuth: boolean
}

export const Home = ({ isAuth }: IHomeProps) => {
  return isAuth ? (
    <StyledGlobalContainer>
      <H1>Estoy logueado</H1>
    </StyledGlobalContainer>
  ) : (
    <UserForm type="login" />
  )
}
