import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.required}>
                <option></option>
                {props.itens.map(item => {
                    return <option key={item.nome}>{item.nome}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa