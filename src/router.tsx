import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const routes = [
  {
    path: '/login',
    component: 'login',
    name: '登录',
    key: 'login'
  },
  {
    path: '/registry',
    component: 'registry',
    name: '注册',
    key: 'registry'
  }
];

function Router(props: any) {
  return (
    <BrowserRouter>
      {routes.map((item) => {
        return <Route key={item.key} component={require(`@/pages/${item.component}`).default} />;
      })}
    </BrowserRouter>
  );
}

export default Router;
