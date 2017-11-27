import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from './ToDo'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tasks' component={Todo} />
        <Redirect from='*' to='/tasks' />
    </Router>
)
