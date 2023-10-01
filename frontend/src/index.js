import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Body from "./components/Body";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>


      <Body />
  </BrowserRouter>
);


