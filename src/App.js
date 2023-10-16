import { useState } from 'react';
import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';
import './App.css';

export default function App() {

	const [temaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <main>
	    <Topo alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <SecaoBanner temaEscuro={temaEscuro}/>
      <SecaoExperienciaTrabalho temaEscuro={temaEscuro}/>
      <Rodape temaEscuro={temaEscuro}/>
		</main>
  );
}