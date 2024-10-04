import './Colaborador.css';
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = ({time, colaborador, excluiItem}) => {
    return (
        <>
            <li id={colaborador.id} className='colaborador'>
                <IoMdCloseCircle size={20} className='botao-excluiColaborador' onClick={(ev) => excluiItem(colaborador.id)}/>
                <div className='colaborador-cabecalho' style={{backgroundColor: time.cor}}></div>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
                <div className='colaborador-rodape'>
                    <h4>{colaborador.nome}</h4>
                    <p>{colaborador.cargo}</p>
                </div>
            </li>
        </>
    )
}

export default Colaborador;
