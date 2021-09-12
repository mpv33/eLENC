import React from "react";
import { BrowserRouter as Router, } from 'react-router-dom';
import RootRouter from './RootRouter'
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (

    <Router>

      <div className='container'>
        <Header />
        <RootRouter />
      </div>


    </Router>

  );
}

export default App;