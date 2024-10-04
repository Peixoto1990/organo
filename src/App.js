import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const times = [
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    }
    ,
    {
      id: uuidv4(),
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    }
    ,
    {
      id: uuidv4(),
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    }
    ,
    {
      id: uuidv4(),
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    }
    ,
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    }
    ,
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    }
    ,
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
  ]

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
      />
      <Rodape nota="Desenvolvido por Alura." corFundo="#6278F7" imagem={"/imagens/fundo.png"}/>
    </div>
  );
}

export default App;
