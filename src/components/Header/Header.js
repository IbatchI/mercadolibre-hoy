import SearchProduct from 'components/SearchProduct/SearchProduct'
import './Header.css'
import Logo from 'components/Logo/Logo'

export default function Header() {
  return (
    <header>
      <Logo />
      <SearchProduct />
      <div/>
    </header>
  )
}
