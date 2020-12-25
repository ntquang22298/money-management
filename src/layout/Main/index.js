import React from 'react';
import { Layout } from 'antd';

import { Route, Switch } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ExpensesPage from '../../pages/Expenses';
import Home from '../../pages/Home';
import SavingPage from '../../pages/Saving';

const { Sider, Content } = Layout;

const Main = () => {
  return (
    <div>
      <Layout>
        <Sider className='left-sider'>
          <LeftSidebar />
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/expenses' component={ExpensesPage} />
              <Route path='/saving' component={SavingPage} />
            </Switch>
          </Content>
          <Sider className='right-sider'>
            <RightSidebar />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};
export default Main;
