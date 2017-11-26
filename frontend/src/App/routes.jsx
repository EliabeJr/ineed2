import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from './ToDo'
import About from '../Components/About'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tasks' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/tasks' />
    </Router>
)
