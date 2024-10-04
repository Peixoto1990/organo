import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
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

  const inicial = [
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Front-End"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Programação"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Data Science"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Devops"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "UX e Design"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Mobile"
    }
    ,
    {
      id: uuidv4(),
      nome: "Aluilson",
      cargo: "Developer Jr.",
      imagem: "https://github.com/Peixoto1990.png",
      time: "Inovação e Gestão"
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador]);
  }

  function mudaCorTime(cor, id) {
      setTimes(times.map(time => {
        if (time.id === id) {
          time = {...time, cor: cor}
        }
        return time
      }))
  }


  return (
    <div className="App">
      <Banner />
      <Formulario 
        colaboradores={colaboradores}
        times={times}
        aoColaboradorCadastrado={(novoColaborador) => aoNovoColaboradorAdicionado(novoColaborador)} 
      />
      <Time 
        excluiItem={(id) => { 
          setColaboradores(colaboradores.filter(elemento => elemento.id !== id));
        }
        }
        times={times}
        colaboradores={colaboradores}
        mudaCorTime={mudaCorTime}
      />
      <Rodape nota="Desenvolvido por Alura." corFundo="#6278F7" imagem={"/imagens/fundo.png"}/>
    </div>
  );
}

export default App;
