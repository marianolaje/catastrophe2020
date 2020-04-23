import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import Español from '../img/spanish.png';
import Ingles from '../img/english.png';

const Idioma = styled.button`
 position: fixed;
 top: 5px;
 right: 10px;
 z-index: 99;
 outline: none;
 width: 9vw;
 height: 5vh;
 font-weight: bold;
 border-radius: 3%;
`
const Imagen = styled.img`
 width: 100%;
 height: 100%;
`

const Language = ({handleClick, idioma}) => {  

  return(
    <Fragment>
      {idioma
      ?
        <Idioma onClick={()=>handleClick('en')} className="colorBotonVolver"><Imagen id="imgLang" src={Ingles}></Imagen></Idioma>
      :     
        <Idioma onClick={()=>handleClick('es')} className="colorBotonVolver"><Imagen id="imgLang" src={Español}></Imagen></Idioma>
      }
    </Fragment>

  )
}

export default Language;