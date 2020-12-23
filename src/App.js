import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Bracket from './Bracket'
import './App.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/bracket" component={Bracket} />
    </Router>
  )
}

export default App
