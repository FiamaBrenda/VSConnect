import React from 'react'
import ReactDOM from 'react-dom/client'

// componentes
import Home from  './pages/Home/'

// estilizacao
import './index.css'
import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer'
import Header from './components/Header'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    {/* <ListaServicos/> */}
    <Footer/>
  </React.StrictMode>,
)
