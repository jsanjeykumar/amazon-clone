import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Router path="/checkout">
            <Checkout />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
