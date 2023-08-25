import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import ListaDevs from "./pages/ListaDevs";
import Footer from "./components/Footer"
import Header from './components/Header';
import Perfil from "./pages/PerfilUsuario";
import VisualizarServico from "./pages/VisualizarServico";
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroServico from "./pages/CadastroServico";
import Login from './pages/Login';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import react from '@vitejs/plugin-react';

function logado() {
  if(secureLocalStorage.getItem("user")){
    const objetoUsuario: any = secureLocalStorage.getItem("user");
    const nome : string = objetoUsuario.user.nome.trim().split(" ")[0]

    return{
      logado:true,
      nomeUsuario: nome
    }
  }else{
    return{
      logado:false,
      nomeUsuario: null
    }
  }
  
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header usuario = {logado()}/>
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='perfil/:idUsuario' element={<Perfil/>}/>
        <Route path='lista/devs' element={<ListaDevs />} />
        <Route path='VisualizarServico/:idServicos' element={<VisualizarServico />} />
        <Route path='Cadastro/Usuario' element={<CadastroUsuario/>}/>
        <Route path='Cadastro/Servico' element={<CadastroServico/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)