//Import dependencies
import React from "react"
import { Switch, Route, Link } from 'react-router-dom'

//App component
export default function App() {
  return (
    <div>
      <nav>
      <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <h1>Pizza</h1>
        </Route>

        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
