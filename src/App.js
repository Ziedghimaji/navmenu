import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmennu from './naavmenu';
const nav = [
  {title : "About Us"},
  {title : "Career"},
  {title : "Departemenet", tab : [
    "Marketing",
    "Costomer ",
    "finance"
  ]},
]

function App() {
  return (
    
        <Navmennu navBar={nav} />
   
  );
}

export default App;
