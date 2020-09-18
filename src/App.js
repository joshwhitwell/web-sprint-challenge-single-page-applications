//Import dependencies
import React, { useState } from "react"
import { Switch, Route, Link } from 'react-router-dom'

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
  const [formValues, setFormValues] = useState(initialFormValues)

  //Form Updater called in Form.js
  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

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
          />
        </Route>

        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
