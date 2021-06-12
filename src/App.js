import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import{useStateValue} from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';



const promise =loadStripe("pk_test_51IwUguSEYW0seHIDI612bVm22X7MWIcyLU9C9uqPey47rxtlgEQSP4IXqiAscLSTeSBvGhdp0tLgrfxFk5t7S9ne00AT4olmaX");



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{

      auth.onAuthStateChanged(authUser =>{

        if(authUser)
        {
          //user logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else
        {
           //user logged out
           dispatch({
             type: 'SET_USER',
             user: null
           })
        }


      })
  } ,[]  )



  return (
    <Router>
    <div className="App">

    <Switch>
    <Route path="/orders">
    <Header/>
      <Orders />
      </Route>
    <Route path="/login">
      <Login />
      </Route>
      <Route path="/checkout">
      <Header />
        <Checkout />
      </Route>
      <Route path="/payment">
      <Header />
    <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>
      <Route path="/">
      <Header />
        <Home />
      </Route>
    </Switch>
     
    </div>
    </Router>
  );
}

export default App;
