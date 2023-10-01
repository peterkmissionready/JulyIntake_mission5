// Body.js
import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';//Task 6 Hello World json message.

import App from '../App';

function Body() {
  return (
    <div>
      <Routes>
        <Route exact path="/Page1" element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>}/> {/* Task 6- {message:"hello world"}*/}
        <Route path="/" element={<App/>} /> {/* Omar's work is meant to go here. */}
      </Routes>
  
    </div>
  );
}

export default Body;
