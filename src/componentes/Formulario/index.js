import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        if (evento.target.id === "1") {
            if (props.colaboradores.find(colaborador => colaborador.nome.toUpperCase() === nome.toUpperCase())) {
                alert("Você não pode adicionar um colaborador repetido.");
            } else {
                const novoColaborador = {
                    "nome": nome,
                    "cargo": cargo,
                    "imagem": imagem,
                    "time": time
                }
        
                props.aoColaboradorCadastrado(novoColaborador);
        
                setNome("");
                setCargo("");
                setImagem("");
                setTime("");
            }
        } else {
            if (props.times.find(time => time.nome.toUpperCase() === nomeTime.toUpperCase())) {
                alert("Você não pode adicionar um time repetido.");
            } else {
                const novoTime = {
                    nome: nomeTime,
                    cor: corTime
                }
    
                props.aoTimeCadastrado(novoTime);
    
                setNomeTime("");
                setCorTime("#000000");
            }
        }
    }

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] =  useState("");
    const [corTime, setCorTime] =  useState("#000000");

    return (
        <section className="formulario">
            <form id='1' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    aoAlterado={(valor) => setNome(valor)}
                    value={nome}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <Campo
                    aoAlterado={(valor) => setCargo(valor)}
                    value={cargo}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <Campo
                    aoAlterado={(valor) => setImagem(valor)}
                    value={imagem}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    aoAlterado={(valor) => setTime(valor)}
                    valor={time}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form id='2' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    aoAlterado={(valor) => setNomeTime(valor)}
                    value={nomeTime}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome"
                />
                <Campo
                    aoAlterado={(valor) => setCorTime(valor)}
                    value={corTime}
                    type='color'
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Informe a cor"
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario