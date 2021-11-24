import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { EndoMarketing } from './endomarketing/pages/Endomarketing'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={EndoMarketing} path='/' exact />
    </BrowserRouter>
  )
}

export default Routes
