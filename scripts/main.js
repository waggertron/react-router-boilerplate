import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';


import NotFound from './components/NotFound.jsx';
import App from './components/App.jsx';
import Echo from './components/Echo.jsx';

/*
  Routes
*/

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
    <Route path="/test/:pathId" component={Echo} />
  </Router>
);
// <Route path="*" component={NotFound} />
// const routes = (
//   <Router history={createHistory()}>
//     <Route path="/" component={App} />
//     <Route path="/path/:pathId" component={App} />
//     <Route path="*" component={NotFound} />
//   </Router>
// );

ReactDOM.render(routes, document.querySelector('#main'));
