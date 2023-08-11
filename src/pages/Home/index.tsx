import "./style.css";
import imgCliente from "../../assets/images/clientes.png";
import imgMaosDev from "../../assets/images/maos_dev.png";
import imgAlfinete from "../../assets/images/alfinete.png";
import { Link } from 'react-router-dom';


function Home() {



    return (
        <div>
            
            <main id="main">
                <h1>página inicial VSconnect</h1>
                <section className="banner">
                    <div className="banner_conteudo">
                        <span className="banner_slogan_l1">VSConnect</span>
                        <p className="banner_slogan_l2">Conectando os melhores desenvolvedores independentes às mais diversas
                            oportunidades.</p>
                        <p className="banner_slogan_l3">Conecte-se e comece a desvendar esse mundo!</p>
                        <div className="banner_botoes">
                            <Link to="/" className="botao banner_botao_dev" >desenvolvedor</Link >
                            <Link to="/" className="botao banner_botao_cli" >cliente</Link >
                        </div>
                    </div>
                </section>
                <section className="container para_clientes">
                    <div className="span_cliente">
                        <p>Desde 2015 unindo propósitos.<br />Uma nova forma de conectar pessoas.</p>
                    </div>
                    <div className="clientes_conteudo">
                        <img src={imgCliente} alt="" />
                        <div className="clientes_texto">
                            <h2>para clientes</h2>
                            <ul>
                                <li>cadastrar serviços</li>
                                <li>procurar por desenvolvedores</li>
                            </ul>
                            <div>
                                <Link to="/" className="botao clientes_botao_cli" >criar conta</Link >
                            </div>
                        </div>
                    </div>
                </section>
                <div className="conexao"></div>
                <section className="container para_devs">
                    <div className="devs_texto">
                        <h2>para desenvolvedores</h2>
                        <ul>
                            <li>encontrar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>
                        <div>
                            <Link to="/" className="botao clientes_botao_devs" >criar conta</Link >
                        </div>
                    </div>
                    <img src={imgMaosDev} alt="" />
                </section>
                <section className="container servicos">
                    <h2>serviços</h2>
                    <div className="servicos_cards">
                        <div className="card card1">
                            <img src={imgAlfinete} alt="" />
                            <h3>Aplicativo para PetShop</h3>
                            <p>Possuo um Petshop e gostaria de um aplicativo para que meus clientes pudessem agendar serviços
                                como: banho e tosa, taxi dog, hotelzinho e etc.</p>
                            <p>Proposta: A Combinar</p>
                        </div>
                        <div className="card card2">
                            <img src={imgAlfinete} alt="" />
                            <h3>Site para Pizzaria</h3>
                            <p>Preciso de um site para divulgar o sabores das pizzas, o endereço, os telefones de contato,
                                nossas redes sociais.</p>
                            <p>Proposta: R$750,00</p>
                        </div>
                    </div>
                    <Link to="lista/servicos">Ver mais serviços</Link >
                </section>
            </main>
        </div>
    );
}

export default Home;