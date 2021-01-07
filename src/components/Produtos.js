import React, { Component } from 'react';
import styled from 'styled-components';
import Produto from './Produto';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10vh;

  h2 {
    width: 100%;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.5rem;
`;

class Produtos extends Component {
  state = {
    total: 0,
    produtos: [
      {
        id: 0,
        name: 'camiseta1',
        value: 49.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 1,
        name: 'blusa1',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 2,
        name: 'camiseta2',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 3,
        name: 'blusa2',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 4,
        name: 'blusa',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 5,
        name: 'blusa',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 6,
        name: 'blusa',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
      {
        id: 7,
        name: 'blusa',
        value: 79.99,
        imgURL: 'https://i.imgur.com/SZ29ybW.png',
      },
    ],
  };

  render() {
    return (
      <Main>
        <h2>Produtos</h2>
        <Section>
          {this.state.produtos.map((produto) => (
            <Produto
              key={produto.id}
              name={produto.name}
              value={produto.value}
              imgURL={produto.imgURL}
            >
              {produto.imgURL}
              {produto.name}
              {produto.value}
            </Produto>
          ))}
        </Section>
      </Main>
    );
  }
}

export default Produtos;
