import './style.css';
import Card from "../Card";

export default function SecaoExperienciaTrabalho(props) {

  return (
    <section id="secaoExpDeTrab" className={props.temaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}>
      <div id="container-texto" className={props.temaEscuro ? "container-texto-modo-escuro" : "container-texto-modo-claro"}>
        <h2>Experiências de Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital,
          nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className="container-cards limitar-secao">
        <Card
          temaEscuro={props.temaEscuro}
          data="JUNHO 2012 - 2016"
          titulo="Desenvovimento Web"
          empresa="Pied Piper StartUp."
          paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
        />
        <Card
		      temaEscuro={props.temaEscuro}
          data="AGOSTO 2016 - 2019"
          titulo="Product Designer"
          empresa="E Corp."
          paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
        />
        <Card
		      temaEscuro={props.temaEscuro}
          data="FEVEREIRO 2019 - 2021"
          titulo="Digital Consulting"
          empresa="Arasaka Inc."
          paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </section>
  );
}