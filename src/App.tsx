import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import ReportStocks from './pages/ReportStocks';
import NoPage from './pages/404';

import ReactDOM = require('react-dom');
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCartShopping,
  faChartColumn,
  faChartSimple,
  faCheckSquare,
  faCoffee,
  faHouse,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCartShopping,
  faChartColumn,
  faChartSimple,
  faCheckSquare,
  faCoffee,
  faHouse,
  faTag,
  faUser
);

let routes = [
  {
    element: 'Customers',
    path: 'customers',
  },
  {
    element: 'Dashboard',
    path: '/',
  },
  {
    element: 'ReportStocks',
    path: 'report-stocks',
  },
];

let items = [];
for (let i = 0; i <= routes.length; i++) {
  if (routes[i]) {
    // console.log(routes[i]);
    const Element = routes[i].element;
    // items.push(<Route path={routes[i].path} element={<Element />} />);
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* {items} */}
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="report-stocks" element={<ReportStocks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
