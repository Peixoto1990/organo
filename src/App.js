import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    }
    ,
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    }
    ,
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    }
    ,
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    }
    ,
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    }
    ,
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    }
    ,
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

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
        excluiItem={(valor) => { 
          setColaboradores(colaboradores.filter(elemento => elemento.nome !== valor));
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
