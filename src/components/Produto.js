import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: tomato;
`;

const Li = styled.li`
  list-style: none;
  border-bottom: 1px solid #bbbbbb;
`;

const Button = styled.button``;

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
