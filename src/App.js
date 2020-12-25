import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.scss';
import Main from './layout/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route e path='/' component={Main} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
