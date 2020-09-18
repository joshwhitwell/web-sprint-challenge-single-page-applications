//Import dependencies
import React, { useState } from "react"
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

//Import components
import Form from './Form'

//Form state initial data
const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  veggie: false,
  specialInstructions: '',
}

//App component
export default function App() {
  //Initialize state
  const [pizza, setPizza] = useState([])
  const [post, setPost] = useState()
  const [formValues, setFormValues] = useState(initialFormValues)

  //Form updater called in Form.js
  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  //Form submitter called in Form.js
  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'veggie'].filter(topping => formValues[topping]),
    }
    postPizza(newPizza)
  }

  //Post request called in submitForm in App.js
  const postPizza = (newPizza) => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(response => {
        setPizza([...pizza, response.data])
        setPost(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  //Return App
  return (
    <div>
      <nav>
      <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form 
            updateForm={updateForm}
            formValues={formValues}
            submitForm={submitForm}
          />
        </Route>

        <Route exact path='/'>
          <h1>Home</h1>
          {
          post ?
          <div style={{ overflow: 'auto' }}>
            <h3>Post Response</h3>
            <pre>{JSON.stringify(post)}</pre>
          </div>
          : null
          }
        </Route>
      </Switch>
    </div>
  )
}
