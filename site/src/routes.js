///// Importações /////
import { Route, Routes, BrowserRouter, } from 'react-router-dom';

//// paginas /////
import Home from './pages/home';
import LongnAdm from './pages/adm/loginAdm';
import NovoProduto from './pages/adm/novoProduto';
import AreaAdm from './pages/adm/areaAdm';
import LoginUsuario from './pages/usuario/loginCliente';
import TabelaProduto from './pages/adm/tabelaProduto';
import CardapioGeral from './pages/usuario/cardapioGeral';
import CadastroUsuario from './pages/usuario/cadastro';

export default function AppsRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/adm/login' element={<LongnAdm />} />
                <Route path='/adm/novoproduto' element={<NovoProduto />} />
                <Route path='/adm/areaadm' element={<AreaAdm />} />
                <Route path='/login' element={<LoginUsuario />} />
                <Route path='/adm/tabelaproduto' element={<TabelaProduto />} />
                <Route path='/cardapiogeral' element={<CardapioGeral />} />
                <Route path='/cadastro' element={<CadastroUsuario />} />

            </Routes>
        </BrowserRouter>
    );
}