import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasicExample from './BasicExample';
import FaseGruposEncuentros from './FaseGruposEncuentros';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BasicExample/>
    <FaseGruposEncuentros/>
    <App />
  </React.StrictMode>
);


