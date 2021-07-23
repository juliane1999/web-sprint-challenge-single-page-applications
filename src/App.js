import React, {useState,useEffect} from "react";
import { Redirect,Route,Switch } from "react-router-dom";
import axios from 'axios'
import Form from './Components/Form'
import Schema from './Components/Schema'
import * as yup from 'yup'

const initialFormValues ={
  //dropdown
  size:'',
  //radio
  sauce:'',
  //text inputs
  instructions:'',
  //checkboxes
  cheese: false,
  pepperoni: false,
  pineapple: false,
  ham: false,
}

const initialFormErrors = {
  size:'',
  sauce:'',
  instructions:'',
}

const initialPizza = []
const initialDisabled = true


const App = () => {
  
  const [pizzas, setPizzas] = useState(initialPizza)          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)    

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      setPizzas(res.data)
      console.log(res.data)
      .catch(err => {
        console.log(err)
      })
    })
  }

  const postNewPizza = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
    .then(res => {
      setPizzas([res.data,...pizzas])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {})
  }

  const validate = (name,value) => {
    yup
    .reach(Schema,name)
    .validate(value)
    .then((valid) => setFormErrors({...formErrors,[name]: ''}))
    .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      instructions: formValues.instructions.trim(),
    }
    postNewPizza(newOrder)
  }

  useEffect(() => {
    Schema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])





  return (

    <div className='App'>
      <header><h1>Pizza Order</h1></header>

      <Form
     values={formValues}
     change={inputChange}
     submit={formSubmit}
     disabled={disabled}
     errors={formErrors}
     />
      
    
   

    </div>
    
  );
};
export default App;
