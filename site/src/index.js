import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

///// Importações /////
import {Route , Routes , BrowserRouter,} from 'react-router-dom';

//// paginas /////
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='/' element= {<Home />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
