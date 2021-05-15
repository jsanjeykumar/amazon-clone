import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useEffect } from 'react'
import { useStateValue } from './context/StateProvider'
import Payment from './Payment'

function App() {
  const [{ user }, dispatch] = useStateValue()

  //listener
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //logged-In
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //logged-out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>


          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/payment">
            <Header />
            <Payment/>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router >
  );
}

export default App;
