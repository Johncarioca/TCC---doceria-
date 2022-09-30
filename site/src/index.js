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
import LoginUsuario from './pages/usuario/loginCliente';
import TabelaProduto from './pages/adm/tabelaProduto';
import CabeçarioLogin from './components';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<CabeçarioLogin/>}/>
      <Route path='/home' element = {<Home />} />
      <Route path='/loginAdm' element = {<LongnAdm />} />
      <Route path='/novoProduto ' element = {<NovoProduto/>}/>
      <Route path='/NovoProduto' element = {<NovoProduto/>}/>
      <Route path='/areaAdm' element = {<AreaAdm/>}/>
      <Route path='/loginUsuario' element = {<LoginUsuario/>}/>    
      <Route path='/tabelaProduto' element = {<TabelaProduto/>}/>
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
