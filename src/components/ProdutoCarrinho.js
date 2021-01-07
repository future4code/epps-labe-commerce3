import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: #eeeeee;
  }
`;

const Span = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: tomato;
  margin: 0.5rem 1rem;
  font-weight: 900;
  font-size: 1rem;
  color: #fff;
  max-height: 2rem;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #e65036;
    transition: background-color 250ms ease-out;
  }
`;

const ProdutoCarrinho = (props) => {
  return (
    <Li produto={props.produto}>
      <Span>
        <Text>{props.name}</Text>
        <Text>{props.value}</Text>
      </Span>
      <Button>X</Button>
    </Li>
  );
};

export default ProdutoCarrinho;
