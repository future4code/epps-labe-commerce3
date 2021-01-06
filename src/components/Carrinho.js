import React from 'react';
import styled from 'styled-components';
import Produto from './Produto';

const Aside = styled.aside`
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;

  h2 {
    padding: 1rem;
  }

  div {
    p {
      padding-left: 1rem;
    }
  }
`;

const Section = styled.section`
  border-top: 1px solid #bbbbbb;
  padding-left: 1rem;
`;

class Carrinho extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        name: '',
        value: 0,
        imgURL: '',
      },
    ],
    total: 0,
  };

  render() {
    return (
      <Aside>
        <h2>Carrinho</h2>

        <div>
          <p>
            Total: R$ <span>{this.state.total}</span>
          </p>

          <Section>
            <h4>Itens adicionados:</h4>
            {this.state.produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
            ))}
          </Section>
        </div>
      </Aside>
    );
  }
}

export default Carrinho;
