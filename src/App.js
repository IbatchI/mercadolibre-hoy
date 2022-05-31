import './App.css'
import { Route } from 'wouter'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import SearchResults from 'pages/SearchResults/SearchResults'

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <Route component={Home} />
      <Route component={SearchResults} path='/search/:keyword' />
    </div>
  )
}
