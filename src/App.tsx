import * as React from 'react';
import './style.css';
import Toolbar from './toolbar';
import Sidebar from './parts/sidebar';
import Footer from './parts/footer';

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
    <div>
      <Toolbar />
      <Sidebar />
      <Footer />
    </div>
  );
}
