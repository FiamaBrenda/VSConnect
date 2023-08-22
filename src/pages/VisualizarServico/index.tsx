//rotas
import { Link , useParams} from "react-router-dom";

//hooks

//estilização
import "./style.css";
import { useEffect, useState } from "react";
import api from "../../utils/api";

function VisualizarServico() {

        const {idServicos} = useParams();
    
        const [titulo, setTitulo] = useState<string>("");
        const [valor, setValor] = useState<string>("");
        const [descricao, setDescricao] = useState<string>("");
        const [techs, setVizualizaTechs] = useState<string[]>([]);

        function buscarServicosPorID() {
            api.get("servicos/" + idServicos)
            .then((response: any) => {
                console.log(response);
    
                //seta os valores referente as informacoes do usuario
                setTitulo(response.data.nome);
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setVizualizaTechs(response.data.techs);
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição:", error);
            })
        }
        
        useEffect(() => {
            buscarServicosPorID();
        } ,[])
    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Servicos</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>R$ {valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                    {
                                techs.map((tech:string, indice: number) => {
                                    return <span key={indice}>{tech}</span>
                                })
                    }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;