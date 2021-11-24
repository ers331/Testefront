import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from '@material-ui/core'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../src/app/App'
import { Listbulletinboard } from './app/endomarketing/pages/Listbulletinboard'

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={Listbulletinboard} />
      </Switch>
      <Switch> </Switch>
    </App>
  </Router>,
  document.getElementById('root')
)
