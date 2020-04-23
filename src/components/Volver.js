import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Boton = styled.button`
 position: fixed;
 bottom: 53px;
 left: 10px;
 z-index: 99;
 outline: none;
 height: 5vh;
 font-weight: bold;
 border-radius: 3%;
}
`

const Volver = ({setPositivo}) => {
  const { t } = useTranslation();

  const volver = () =>{
    setPositivo(false)
  }

  return(
    <Boton onClick={volver} className="colorBotonVolver">{t('volver.volver')}</Boton>
  )
}

export default Volver;
