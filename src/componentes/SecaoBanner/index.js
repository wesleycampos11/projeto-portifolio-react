import './style.css'

export default function SecaoBanner(props) {

  return(
    <section id="secaoBanner">
      <div id="imagemDeFundo" className={props.temaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
      <div className="texto-secaoBanner">
        <p>FRONTEND / BACKEND/ TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e Desenvolvimento Web</span>
      </div>
    </section>
  )
}
