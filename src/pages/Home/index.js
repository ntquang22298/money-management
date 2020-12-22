import React from 'react';

import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Profile from '../../components/Profile';
import History from '../../components/History';
import Main from '../../components/Layout/Main';
import LeftSidebar from '../../components/Layout/LeftSidebar';
import ExpensesPage from '../Expenses';
import MoneyFlow from '../../components/MoneyFlow';
const { Sider, Content } = Layout;

const Home = () => {
  return (
    <div>
      <Layout>
        <Sider className='left-sider'>
          <LeftSidebar />
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/expenses' component={ExpensesPage} />
            </Switch>
          </Content>
          <Sider className='right-sider'>
            <Profile />
            <MoneyFlow />
            <History />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};
export default Home;
