import React from 'react';
import styled from "styled-components" //importando a biblioteca do styled-components
import {createGlobalStyle} from "styled-components" //global é para todo o código, estilização global.
import * as S from "./Style.jsx" //SOMENTE para estilização em um outro arquivo


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

`
//const para guardar o estilo
//Batata é o nome que dei pra tag
// = recebe o styled component (biblioteca de estilo)
//. h3 é a tag escolhida (pode ser qualquer tag)
const Batata = styled.div`
  color: #af1388;
`
const Paragrafo = styled.p`
  color: red;
  font-size: 2rem;
`

function App() {
  return (
    <S.Div>
      <GlobalStyle/>

      <Batata>
        <h2>Oi</h2>
        <p>Quero café</p>
      </Batata>

      <Paragrafo>Segundou</Paragrafo>

    </S.Div>
  );
}

export default App;