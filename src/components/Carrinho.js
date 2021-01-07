import React from 'react';
import styled from 'styled-components';
import ProdutoCarrinho from './ProdutoCarrinho';

const Aside = styled.aside`
  height: 100vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-left: 1rem;
  border-left: 1px solid #ddd;

  h2 {
    padding: 1rem;
  }

  div {
    p.total {
      padding-left: 1rem;
    }
  }
`;

const Section = styled.section`
  border-top: 1px solid #bbbbbb;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

class Carrinho extends React.Component {
  state = {
    total: 0,
    produtos: [],
  };

  // handlerAddToCart = () => {};

  render() {
    return (
      <Aside>
        <h2>Carrinho</h2>

        <div>
          <p className="total">Total: R$ {this.state.total}</p>

          <Section>
            <h4>Itens adicionados:</h4>
            <Ul>
              {this.state.produtos.map((produto) => (
                <ProdutoCarrinho
                  key={produto.id}
                  name={produto.name}
                  value={produto.value}
                >
                  {produto.name}
                  {produto.value}
                </ProdutoCarrinho>
              ))}
            </Ul>
          </Section>
        </div>
      </Aside>
    );
  }
}

export default Carrinho;
