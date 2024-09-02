import './Rodape.css';
import Social from '../Social';

const Rodape = (props) => {
    const sociais = [
        "facebook",
        "x",
        "instagram"
    ]
    return (
        <section className='rodape'>
            <footer style={{backgroundImage: `url(${props.imagem})`, backgroundColor: props.corFundo}}>
                <Social lista={sociais}/>
                <section className='logo'><div style={{backgroundImage: "url(/imagens/logo.png)"}}></div></section>
                <section className="nota-rodape"><h4>{props.nota}</h4></section>
            </footer>
        </section>
    );
}

export default Rodape;