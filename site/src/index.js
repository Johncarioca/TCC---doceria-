import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

///// Importações /////
import {Route , Routes , BrowserRouter,} from 'react-router-dom';

//// paginas /////
import Home from './pages/home';
import LongnAdm from './pages/adm/loginAdm';
import NovoProduto from './pages/adm/novoProduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='home' element= {<Home />} />
    <Route path='longinadm' element= {<LongnAdm />} />
    <Route path= '/' element = {<NovoProduto/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
