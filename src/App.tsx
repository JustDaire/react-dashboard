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
  faCheckSquare,
  faCoffee,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faHouse);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="report-stocks" element={<ReportStocks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
