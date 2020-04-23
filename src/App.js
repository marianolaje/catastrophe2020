import React, {useState} from 'react';
import Corona from './components/Corona'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next';
import './Colors.css'
import Español from './img/spanish.png';
import Ingles from './img/english.png';
import styled from '@emotion/styled';

const Idioma = styled.button`
border: none;
 position: fixed;
 top: 5px;
 right: 10px;
 z-index: 99;
 outline: none;
 width: 35px;
 height: 35px;
 font-weight: bold;
 border-radius: 3%;
`

const Imagen = styled.img`
 width: 100%;
 height: 100%;
`

function App() {
  const [idiomaBool, setIdiomaBool] = useState(true)
  let componente;

  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
    if(idiomaBool){
      setIdiomaBool(false)
    } else{
      setIdiomaBool(true)
    }
  }

  if(idiomaBool){
    componente = <Idioma onClick={()=>handleClick('en')} className="colorBotonVolver"><Imagen id="imgLang" src={Español}></Imagen></Idioma>
  } else{
    componente = <Idioma onClick={()=>handleClick('es')} className="colorBotonVolver"><Imagen id="imgLang" src={Ingles}></Imagen></Idioma>
  }

  return (
    <div className="container">
      {componente}
      <Corona/>
      <Footer/>
    </div>
  );
}

export default App;
