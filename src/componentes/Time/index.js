import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.times.map((time) => {
            const timeExiste = props.colaboradores.find(colaborador => colaborador.time === time["nome"]);

            if (timeExiste) {
                return (
                    <section style={{backgroundColor: time["corSecundaria"], backgroundImage: "url(/imagens/fundo.png)"}} id={time.id} className={"time"} key={time["nome"]}>
                        <h3>{time["nome"]}<div style={{backgroundColor: time.corPrimaria}}></div></h3>
                        <ul>
                            {props.colaboradores.map((colaborador, indice) => {
                                if (colaborador.time === time["nome"]) {
                                    return (
                                        <Colaborador 
                                         key={indice}
                                         time={time}
                                         colaborador={colaborador}
                                         excluiItem={props.excluiItem}
                                        />
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
