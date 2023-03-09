import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { UserForm } from '../components/UI/molecules/UserForm/UserForm'
import { useAppSelector } from '../store/hooks'
import { H1 } from '../styles/SearchResultsStyles'

export const Home = () => {
  const { isAuth } = useAppSelector((state) => state.user)

  return isAuth ? (
    <StyledGlobalContainer>
      <H1>Estoy logueado</H1>
    </StyledGlobalContainer>
  ) : (
    <UserForm type="login" />
  )
}
