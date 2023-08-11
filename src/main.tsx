
import React from 'react'
import ReactDOM from 'react-dom/client'

// componentes
import Home from './pages/Home/'

// estilizacao
import './index.css'

import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer'
import Header from './components/Header'

// rotas
import { Route, BrowserRouter, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='lista/servicos' element={<ListaServicos/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)

