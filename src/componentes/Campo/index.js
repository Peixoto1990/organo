import './Campo.css'

const Campo = ({type = 'text', value, obrigatorio = false, label, placeholder, aoAlterado}) => {

    const placeholderModificada = `${placeholder}...` 

    let valor = '';

    const aoDigitado = (evento) => {
        valor = evento.target.value
        aoAlterado(valor)
    }

    return (
        <div className="campo">
            <label>
                {label}
            </label>
            <input type={type} value={value} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo