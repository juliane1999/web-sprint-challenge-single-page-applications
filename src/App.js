import React from "react";
import { Route,Switch } from "react-router-dom";
import FormPage from "./Components/Formpage";
import Home from './Components/Home'



export default function App () {
  


  return (

    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>

      <Switch>

        <Route exact path='/pizza/:order-pizza'>
          <FormPage />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
      

    </div>
    </nav>
    </div>

  )}
 
