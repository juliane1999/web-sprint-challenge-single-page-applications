import React from "react";
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import FormPage from "./Components/Formpage";
import Home from './Components/Home'



export default function App () {
  


  return (
    <Router>
      <div>
      <nav>
      <h1>Lambda Eats</h1>
      <Link to ='/'>Home</Link>
      <Link to ='/pizza/pizza-form'>Order Pizza</Link>
      </nav>

    

     

      <Switch>

        <Route path='/pizza'>
          <FormPage />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
      

    </div>
    </Router>
 

  )}
 
