import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.times.map((time) => {
            const timeExiste = props.colaboradores.find(colaborador => colaborador.time === time["nome"]);

            if (timeExiste) {
                return (
                    <section style={{backgroundColor: hexToRgba(time.cor, 0.5), backgroundImage: "url(/imagens/fundo.png)"}} id={time.id} className={"time"} key={time["nome"]}>
                        <h3>{time["nome"]}<div style={{backgroundColor: time.cor}}></div></h3>
                        <input title='Click para mudar a cor do time' value={time.cor} className='mudar-cor' onChange={(ev) => props.mudaCorTime(ev.target.value, time.id)} type='color' />
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
