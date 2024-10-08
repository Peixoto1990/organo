import './BotaoForm.css';

const BotaoForm = ({ imagem, title = "Mostrar/Ocultar Formulário", alteraForm}) => {
    return (
        <div className='botao-form'>
            <button onClick={alteraForm} style={{backgroundImage: `url(${imagem})`}} title={title}></button>
        </div>
    )
}

export default BotaoForm;
