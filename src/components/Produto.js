
import React, { Component } from 'react'
import styled from 'styled-components'
import camiseta1 from ''

const Produtodiv = styled.div`
width: 100%;
height: 100%;
border: 2px solid black;
display: flex;
flex-direction: column-reverse;
`
const Buybtn = styled.button`
background-color: black;
color: white;
font-size: 18px;
`





const Produto = (props) => {
  return (
      <div>
      <Produtodiv> 
    {props.name}
        <Buybtn>Colocar no Carrinho</Buybtn>
      </Produtodiv>
        
      </div>
    )
};

export default Produto;

