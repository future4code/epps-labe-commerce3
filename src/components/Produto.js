import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: tomato;
`;

const Li = styled.li`
  list-style: none;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: tomato;
  margin: 0.5rem;
  font-weight: 900;
  font-size: 1rem;
  color: #fff;

  &:hover {
    background-color: #e65036;
  }
`;

class Produto extends Component {
  render() {
    return (
      <Li>
        <Text>{Produto.name}</Text>
        <Button>X</Button>
      </Li>
    );
  }
}

export default Produto;
