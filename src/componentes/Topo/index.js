import './style.css'
import Logo from '../../assets/logo.png'
import iconeSol from '../../assets/sun.png'
import iconeLua from '../../assets/moon.png'

export default function Topo(props) {

  return(
    <header className={props.temaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
      <img className="logo" src={Logo} alt="logomarca"/>
      <button onClick={props.alterarTema} className={props.temaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
        <img className='iconesBtn' src={props.temaEscuro ? iconeSol : iconeLua} alt='icone'/>
      </button>
    </header>
  )
}