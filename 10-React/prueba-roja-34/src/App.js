import React from 'react';

import popper from 'popper.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Saludo from './componentes/saludo/saludo'
import Navbar from './componentes/Navbar/Navbar'

import './App.css'


function App() {
  return (
    <div className="App">

      <Navbar />
      <Saludo />

    </div>
  );
}

export default App;
