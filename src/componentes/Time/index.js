import './Time.css';

const Time = (props) => {
    return (
        props.times.map((time) => {
            const timeExiste = props.colaboradores.find(colaborador => colaborador.time === time["nome"]);

            if (timeExiste) {
                return (
                    <section style={{backgroundColor: time["corSecundaria"]}} className={"time"} key={time["nome"]}>
                        <h3>{time["nome"]}<div style={{backgroundColor: time.corPrimaria}}></div></h3>
                        <ul>
                            {props.colaboradores.map((colaborador, indice) => {
                                if (colaborador.time === time["nome"]) {
                                    return (
                                        <li key={indice + colaborador.nome}>
                                            <div style={{backgroundColor: time["corPrimaria"]}}><button onClick={(ev) => props.excluiItem(ev.target.dataset.nome)} data-nome={colaborador.nome}>x</button></div>
                                            <img src={colaborador.imagem} alt={colaborador.nome}/>
                                            <div>
                                                <h4>{colaborador.nome}</h4>
                                                <p>{colaborador.cargo}</p>
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return ""
                                }
                            })}
                        </ul>
                    </section>
                )
            } else {
                return ""
            }
        })
    );
}

export default Time;
