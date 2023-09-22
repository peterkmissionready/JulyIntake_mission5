// Body.js
import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

import Page1 from './Page1';
// import LaptopResults from './LaptopResults';
// import Page2 from './Page2';

import Index from './index';

function Body() {
  return (
    <div className="BodyContents">
      <Routes>
        <Route exact path="/Page1" element={<Page1/>} />
        {/*{<Route path="/page2" element={<Page2/>} />
        <Route path="/Index" element={<Index/>} /> */}
        <Route path="/" element={<Index/>} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Body;
