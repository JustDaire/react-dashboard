import * as React from 'react';
import './style.css';
import Toolbar from './parts/Toolbar';
import Sidebar from './parts/Sidebar';
import Footer from './parts/Footer';

export default function App() {
  return (
    <div>
      <Toolbar />
      <div className="row m-0">
        <Sidebar />
        // TODO: Add main component
        <div className="main col-md-9 col-lg-10 p-2">
          <h1>Dashboard </h1>
        </div>
      </div>
    </div>
  );
}
