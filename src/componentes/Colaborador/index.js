import './Colaborador.css';

const Colaborador = ({time, colaborador, excluiItem}) => {
    return (
        <>
            <li id={colaborador.id} className='colaborador'>
                <div style={{backgroundColor: time["corPrimaria"]}}><button onClick={(ev) => excluiItem(colaborador.id)} data-nome={colaborador.nome}>x</button></div>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
                <div>
                    <h4>{colaborador.nome}</h4>
                    <p>{colaborador.cargo}</p>
                </div>
            </li>
        </>
    )
}

export default Colaborador;
