import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

///// Importações /////
import {Route , Routes , BrowserRouter,} from 'react-router-dom';

//// paginas /////
import Home from './pages/home';
import LongnAdm from './pages/adm/loginAdm';
import NovoProduto from './pages/adm/novoProduto';
import AreaAdm from './pages/adm/areaAdm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='/home' element = {<Home />} />
    <Route path='/loginAdm' element = {<LongnAdm />} />
    <Route path='/' element = {<NovoProduto/>}/>
    <Route path='/areaAdm' element = {<AreaAdm/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
