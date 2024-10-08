import './Colaborador.css';
import { IoMdCloseCircle, IoIosHeart } from "react-icons/io";

const Colaborador = ({time, colaborador, excluiItem, aoFavorito}) => {
    return (
        <>
            <li id={colaborador.id} className='colaborador'>
                <IoMdCloseCircle 
                 className='botao-excluiColaborador'
                 size={22}
                 onClick={(ev) => excluiItem(colaborador.id)}
                />
                <div className='colaborador-cabecalho' style={{backgroundColor: time.cor}}></div>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
                <div className='colaborador-rodape'>
                    <h4>{colaborador.nome}</h4>
                    <p>{colaborador.cargo}</p>
                    <IoIosHeart
                     className={`favorito favorito-${colaborador.favorito}`}
                     size={22}
                     onClick={() => aoFavorito(colaborador.id)} 
                    />
                </div>
            </li>
        </>
    )
}

export default Colaborador;
