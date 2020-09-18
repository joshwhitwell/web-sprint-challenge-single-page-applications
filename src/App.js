//Import dependencies
import React, { useEffect, useState } from "react"
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

//Import components
import Form from './Form'
import schema from './validation/formSchema'

//Form state initial data
const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  peppers: false,
  onions: false,
  specialInstructions: '',
}

//Error state initial data
const initialErrorValues = {
  name: '',
  size: '',
  sauce: '',
}

//App component
export default function App() {
  //Initialize state
  const [pizza, setPizza] = useState([])
  const [post, setPost] = useState()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrorValues)
  const [disabled, setDisabled] = useState(true)

  //Form updater called onChange in Form.js
  const updateForm = (name, value) => {
    validateInput(name, value)
    setFormValues({...formValues, [name]: value})
  }

  //Input validator called in updateForm
  const validateInput = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        //cleans error state
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch((error) => {
        //sets form errors from error message returned by validate
        setFormErrors({...formErrors, [name]: error.errors[0]})
      })
  }

  //Form submitter called in Form.js
  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'peppers', 'onions'].filter(topping => formValues[topping]),
    }
    postPizza(newPizza)
  }

  //Form validator called on change to formValues state
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
      .catch(() => {
        debugger
      })
  }, [formValues])

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
            formErrors={formErrors}
            disabled={disabled}
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
