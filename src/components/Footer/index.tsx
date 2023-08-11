import "./style.css"
import imgLogo from "../../assets/images/logo.svg"
import ImgDev from "../../assets/images/dev.png"
import imgInstagram from "../../assets/images/instagram.svg"
import imgFacebook from "../../assets/images/facebook.svg"
import imgLinkedin from "../../assets/images/linkedin.svg"
import "./style.css"
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={ImgDev} alt=""/>
                        <div className="span_dicas_texto">
                            <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                                recomendações para saber mais.</p>
                            <Link to="/" className="botao botao_dicas" >mais dicas</Link>
                        </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>Login</li>
                            <li>Home</li>
                            <li>Listar Serviços</li>
                            <li>Cadastrar Cliente</li>
                            <li>Cadastrar Desenvolvedor</li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt=""/>
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <Link to={"/"}><img src={imgFacebook} alt=""/></Link>
                                <Link to={"/"}><img src={imgInstagram} alt=""/></Link>
                                <Link to={"/"}><img src={imgLinkedin} alt=""/></Link>
                            </div>
                            <Link to="mailto:">contato@vsconnect.com</Link>
                        </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    );
}

export default Footer;