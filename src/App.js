import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import BotaoForm from './componentes/BotaoForm';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    }
    ,
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    }
    ,
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    }
    ,
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    }
    ,
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    }
    ,
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    }
    ,
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const [formAtivo, setFormAtivo] = useState(true);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}]);
  }

  function aoNovoTimeAdicionado(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  function mudaCorTime(cor, id) {
      setTimes(times.map(time => {
        if (time.id === id) {
          time = {...time, cor: cor}
        }
        return time
      }))
  }

  function favoritaColaborador(id) {
    setColaboradores(colaboradores.map(
      colaborador => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito
        }
        return colaborador
      }
    ))
  }

  return (
    <div className="App">
      <Banner />
      { formAtivo === true ? <Formulario 
        colaboradores={colaboradores}
        times={times}
        aoColaboradorCadastrado={(novoColaborador) => aoNovoColaboradorAdicionado(novoColaborador)} 
        aoTimeCadastrado={novoTime => aoNovoTimeAdicionado(novoTime)}
      /> : ""}
      <BotaoForm 
       imagem={'/imagens/btn-icone.png'}
       alteraForm={() => setFormAtivo(!formAtivo)}
      />
      <Time 
        excluiItem={(id) => { 
          setColaboradores(colaboradores.filter(elemento => elemento.id !== id));
        }
        }
        aoFavorito={(id) => favoritaColaborador(id)}
        times={times}
        colaboradores={colaboradores}
        mudaCorTime={mudaCorTime}
      />
      <Rodape nota="Desenvolvido por Alura." corFundo="#6278F7" imagem={"/imagens/fundo.png"}/>
    </div>
  );
}

export default App;
