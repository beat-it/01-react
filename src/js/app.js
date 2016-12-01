/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/hello-world';
import Homepage from './homepage';
import Cart from './cart';
import Main from './main';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'

require("./../css/custom.css");

render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Homepage}></IndexRoute>
            <Route path="cart" component={Cart}></Route>
        </Route>
    </Router>
), document.body)

//
// <Route path="about" component={About}/>
//     <Route path="users" component={Users}>
//     <Route path="/user/:userId" component={User}/>
//     </Route>
//     <Route path="*" component={NoMatch}/>