import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
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
    }

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    aoAlterado={(valor) => setNome(valor)}
                    valor={nome}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    aoAlterado={(valor) => setCargo(valor)}
                    valor={cargo}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <CampoTexto
                    aoAlterado={(valor) => setImagem(valor)}
                    valor={imagem}
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
        </section>
    )
}

export default Formulario