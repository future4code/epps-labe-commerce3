import React from 'react';
import styled from 'styled-components';

const Produtodiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 1px 1px 15px #cacaca;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const Buybtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f75c03;
  color: #ffebf4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #fd7121;
    transition: background-color 250ms ease-out;
  }
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
`;
const Img = styled.img`
  width: 180px;
  max-height: 180px;
  padding-bottom: 0.7rem;
`;

const Produto = (props) => {
  const addToCart = (id) => {
    console.log(id);
  };
  return (
    <Produtodiv>
      <Img src={props.imgURL} />
      <Text>{props.name}</Text>
      <Text>R$ {props.value}</Text>
      <Buybtn onClick={addToCart(props.id)}>Colocar no Carrinho</Buybtn>
    </Produtodiv>
  );
};

export default Produto;
