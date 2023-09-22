import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MetroNavBar from "./components/navbar";
import Body from "./components/Body";
//import "./App.css"

function App() {
  return (
    <div className="bg-white h-full">
      <div className="mx-24 my-6">
        <MetroNavBar/>
        <Body />
      </div>
    </div>
  );
}

export default App;
