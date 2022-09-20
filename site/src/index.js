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

    <Route path='home' element= {<Home />} />
    <Route path='/' element= {<LongnAdm />} />
    <Route path= 'Novo produto' element = {<NovoProduto/>}/>
    <Route path= 'areaadm' element = {<AreaAdm/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
