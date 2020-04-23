import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.button`
 border-top: 1px solid #3A506B;;
 position: fixed;
 bottom: 0px;
 right: 0px;
 width: 100vw;
 padding: 0;
 margin: 0;
 height: 50px;
 a{
   text-decoration: none;
 }
`

const InfoPositivo = ({setPositivo, setNegativo}) => {
  return(
    <Footer className="colorFooterButton">
      <a className="colorFooterA" target="_blank" rel="noopener noreferrer" href="mailto:marianolaje@outlook.com?subject=Contact%20from%20app%202020">marianolaje@outlook.com</a>
      <p>&copy; Copyright 2020 - Mariano Laje</p>
    </Footer>
  )
}

export default InfoPositivo;
