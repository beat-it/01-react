/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import Homepage from './homepage';
import Cart from './cart';
import Main from './main';

require("./../css/custom.css");

render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Homepage}></IndexRoute>
            <Route path="cart" component={Cart}></Route>
        </Route>
    </Router>
), document.getElementById('application-container'));