import './Social.css';

const Social = (props) => {
    return (
        <section className='social'>
            {props.lista.map(
                social => <div key={social}>
                    <button title={social} style={{backgroundImage: `url(/imagens/${social}.png)`}}></button>
                </div>
            )}
        </section>
    );
}

export default Social;