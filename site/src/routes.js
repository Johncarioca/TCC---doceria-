///// Importações /////
import { Route, Routes, BrowserRouter, } from 'react-router-dom';

//// paginas /////
import Home from './pages/home';
import LongnAdm from './pages/adm/loginAdm';
import NovoProduto from './pages/adm/novoProduto';
import AreaAdm from './pages/adm/areaAdm';
import LoginUsuario from './pages/usuario/loginCliente';
import TabelaProduto from './pages/adm/tabelaProduto';
import CadastroUsuario from './pages/usuario/cadastro';
import CarrinhoUsuario from './pages/usuario/carrinho';
import Cardapio from './pages/usuario/cardapio';
import DetalhesProdutos from './pages/usuario/detalhesProduto';
import Pagamento from './pages/usuario/pagamento';
import LPedidos from './pages/adm/listaPedidos';

import PerfilUser from './pages/usuario/perfil';
import TelaEndereco from './pages/usuario/telaEndereco';
import AlterarPerfilUser from './pages/usuario/perfiIInfo';
import AlterarEmail from './pages/usuario/alterarEmail';
import MeusEndereco from './pages/usuario/meusEndereco';
import PagamentoPix from './pages/usuario/pagamentoPix';

 



export default function AppsRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/adm/login' element={<LongnAdm />} />
                <Route path='/adm/novoproduto' element={<NovoProduto />} />
                <Route path='/adm/novoproduto/:id' element={<NovoProduto />} />
                <Route path='/adm/areaadm' element={<AreaAdm />} />
                <Route path='/login' element={<LoginUsuario />} />
                <Route path='/adm/tabelaproduto' element={<TabelaProduto />} />
                <Route path='/cadastro' element={<CadastroUsuario />} />
                <Route path='/carrinho' element={<CarrinhoUsuario/>} />
                <Route path='/cardapio' element={<Cardapio/>} />
                <Route path='/detalhe/produto/:id' element={<DetalhesProdutos/>} />
                <Route path='/adm/listapedidos' element={<LPedidos/>} />

                <Route path='/pagamento' element={<Pagamento/>} />
                <Route path='/pagamentopix' element={<PagamentoPix/>} />

                <Route path='/endereco' element={<TelaEndereco/>} />
                <Route path='/perfil/alterar' element={<AlterarPerfilUser/>} />
                <Route path='/perfil' element={<PerfilUser/>} />
                <Route path='/perfil/alterar/info' element={<AlterarEmail/>} />
                <Route path='/meusendereco' element={<MeusEndereco/>} />

            </Routes>
        </BrowserRouter>
    );
}