import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Padre from "./Padre";
import Hijo from "./Hijo";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Padre>
    <Hijo nombre="Pedro"/>
    <Hijo nombre="Carlos"/>
    <Hijo nombre="Laura"/>
  </Padre>
  </React.StrictMode>
);