import React from 'react';
import styled from 'styled-components';
import Produto from './Produto';

const Aside = styled.aside`
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;

  h2 {
    padding: 1rem;
  }

  div {
    padding-left: 1rem;
    padding-right: 1rem;
  }
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

          <div>
            <h4>Itens adicionados:</h4>
            {this.state.produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </Aside>
    );
  }
}

export default Carrinho;
