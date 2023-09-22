// Body.js
import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';//Task 6 Hello World json message.

import Index from './index';

function Body() {
  return (
    <div className="BodyContents">
      <Routes>
        <Route exact path="/Page1" element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>}/> {/* Task 6- {message:"hello world"}*/}
        <Route path="/" element={<Index/>} /> {/* Omar's work is meant to go here. */}
      </Routes>
      <Outlet />
    </div>
  );
}

export default Body;
