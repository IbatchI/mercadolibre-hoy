import './App.css'
import { Route } from 'wouter'
import Home from 'pages/Home/Home'
import SearchResults from 'pages/SearchResults/SearchResults'

function App() {
  return (
    <div className='App'>
      <Route component={Home} />
      <Route component={SearchResults} path='/search/:keyword' />
    </div>
  )
}

export default App
