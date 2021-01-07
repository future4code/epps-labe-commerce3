
import React, { Component } from 'react'
import styled from 'styled-components'
import Produto from './Produto'


const Section = styled.section``;

class Produtos extends Component {
  state = {
    total: 0,
    produtos: [
      {
        id: 0,
        name: 'camiseta',
        value: 49.99,
        imgURL: '',
      },
      {
        id: 1,
        name: 'blusa',
        value: 79.99,
        imgURL: '',
      },
    ],
  };

  render() {
    return (
      <Section>
        <h2>Produtos</h2>
        {this.state.produtos.map((produto) => (
          <Produto key={produto.id} name={produto.name} value={produto.value}>
            {produto.name}
            {produto.value}
          </Produto>
        ))}
      </Section>
    );
  }
}

export default Produtos;

