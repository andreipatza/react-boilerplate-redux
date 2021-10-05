import React, { Suspense, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'

// COMPONENTS
import Homepage from './pages/Homepage/Homepage'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  const token = localStorage.getItem('token')

  useEffect(() => {
    // Logout user if token invalid
    axios.interceptors.response.use(
      response => {
        return response
      },
      async function(error) {
        if (
          'response' in error &&
          typeof error.response !== 'undefined' &&
          error.response.status === 401 &&
          (token === undefined || token === null)
        ) {
          // logout user if token is invalid / null / unauthorized
        }
        return Promise.reject(error)
      },
    )
  }, [token])

  return (
    <Suspense fallback="Loading...">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage className={'myCustomClassname'} />
          </Route>
          <Route exact path="/test/:id">
            <Homepage className={'myCustomClassname'} />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
