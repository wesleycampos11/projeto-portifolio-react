import React from 'react';
import "./style.css";
import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeGithub from '../../assets/github.png';
import iconeInstagram from '../../assets/instgram.png';
import iconeGooglePlus from '../../assets/google-plus.png';

export default function Rodape(props) {

  return(
    <footer className={props.temaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
      <img src={Logo} alt="logomarca"/>
      <p className="paragrafo">
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
      </p>
      <div className="iconesRodape">
        <img src={iconeFacebook} alt="facebook"/>
        <img src={iconeTwitter} alt="twitter"/>
        <img src={iconeLinkedin} alt="linkedin"/>
        <img src={iconeGithub} alt="github"/>
        <img src={iconeInstagram} alt="instagram"/>
        <img src={iconeGooglePlus} alt="google plus"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>Wesley Campos</span></p>
      </div>
    </footer>
  )
}