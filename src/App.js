import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.scss';
import Main from './layout/Main';
import { createBrowserHistory } from 'history';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
const hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        {/* <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} /> */}
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
