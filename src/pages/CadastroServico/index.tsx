//estilização
import api from '../../utils/api';
import "./style.css";

//Hook
import { useEffect, useState } from "react";

function CadastroServico() {
    
const [titulo, setTitulo] = useState<string>("");
const [valor, setValor] = useState<string>("");
const [descricao, setDescricao] = useState<string>("");
const [techs, setVizualizaTechs] = useState<string[]>([]);


    function CadastrarServico(e: any) {
        e.preventDefault();

        const servico = {
            "nome": titulo,
            "valor": valor,
            "descricao": descricao,
            "techs": techs
        }


        api.post("servicos", servico)
        .then((response: any) => {
            console.log(response);
        })
        .catch((error: any) => {
            console.log("Error ao realizar um requisição:", error);
        })
    }
    

    useEffect(() => {
        //Inserindo o título da guia de endereço da página atual.
        document.title = "VSConnect - Lista de Serviços";
    }, []);

    function adicionarSkill() {
        //verifica o valor do state select
        if (select === "") {
            //se for igual a string vazia, exibe uma mensagem
            alert("Selecione uma skill para adicionar");
        } else {
            //se não, verifica se no state skillsSelecionadas existe a skill que o usuario selecionou
            if (skillsSelecionadas.includes(select)) {
                //se existir, exibe uma mensagem
                alert("Essa skill já foi selecionada");
            }
            else {
                //se não existir, a variavel novaListaSkillsSelecionadas cria uma cópia do valor do state skillsSelecionadas
                let novaListaSkillsSelecionadas = [...skillsSelecionadas];

                //E adiciona a skill, que foi selecionada pelo usuário
                novaListaSkillsSelecionadas.push(select);

                //Atualiza o valor do state skillsSelecionadas
                setSkillsSelecionadas(novaListaSkillsSelecionadas);
            }
        }
    }

    function excluirSkill(skill: string) {

        //A variavel novaListaSkillsSelecionadas armazena skills diferente da skill que o usuário clicou para ser excluida.
        const novaListaSkillsSelecionadas = skillsSelecionadas.filter(item => item !== skill);

        //Atualiza o valor do state skillsSelecionadas, com o valor da variavel novaListaSkillsSelecionadas 
        setSkillsSelecionadas(novaListaSkillsSelecionadas);
    };


    return (
        <main className="main_cad_servico">
            <div className="container container_cad_serv">
                <div className="cad_serv_conteudo">
                    <h1>Cadastro de Serviço</h1>
                    <hr />
                    <form className="cad_serv_formulario" action="" method="POST" onSubmit={CadastrarServico}>
                        <div className="cad_serv_box_input">
                            <label htmlFor="titulo">Titulo do serviço:</label>
                            <input
                                type="text"
                                id="titulo"
                                placeholder="Ex: E-commerce para pizzaria"
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="descricao">Descrição do serviço:</label>
                            <textarea
                                name=""
                                id="descricao"
                                placeholder="Digite aqui a descrição resumida do que você precisa:"
                                onChange={(e) => setDescricao(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="proposta">Proposta:</label>
                            <input
                                type="text"
                                id="valor"
                                // onKeyUp={ }
                                maxLength={17}
                                placeholder="Digite o valor que deseja pagar:"
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>

                        <span>Tecnologias Desejadas</span>
                        <hr />
                        <div className="cad_serv_box_skills">
                            <span>Selecione uma Skill para adicionar</span>
                            <div className="cad_linha_select">
                                <select defaultValue={"DEFAULT"} name="" id="cad_select_skill">
                                    <option value="DEFAULT" disabled>Selecione</option>
                                </select>
                                <input
                                    type="button"
                                    value="Inserir"
                                    id="cad_btn_inserir"
                                />
                            </div>
                            <div id="cad_lista_skills">

                            </div>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroServico;

