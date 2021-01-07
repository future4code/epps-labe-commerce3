import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  overflow-x: hidden;
  color: #291720;
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 3px #ddd;

  h1 {
    margin-left: 2rem;
    padding: 1rem;
  }

  div {
    padding: 1rem;
    margin-right: 1rem;

    ul {
      display: flex;
    }

    ul li {
      margin-right: 1rem;
      list-style: none;
    }
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Aside = styled.aside`
  height: 100vh;
  width: 25vw;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 3px #ddd;
`;

const Article = styled.article`
  min-width: ${(props) => (props.carrinhoToggle ? '75vw' : '50vw')};
  height: 90vh;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: #f75c03;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffebf4;
  border-radius: 5px;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #fd7121;
    transition: background-color 250ms ease-out;
  }
`;

class App extends React.Component {
  state = {
    carrinhoToggle: false,
    toggledWidth: false,
  };

  abrirCarrinho = () => {
    this.setState((prevState) => ({
      carrinhoToggle: !prevState.carrinhoToggle,
    }));
  };

  render() {
    return (
      <Main>
        <Header>
          <h1>Lab E-commerce</h1>
          <div>
            <ul>
              <li>
                <Button href="/">Home</Button>
              </li>
              <li>
                <Button onClick={this.abrirCarrinho}>Carrinho</Button>
              </li>
            </ul>
          </div>
        </Header>

        <Section>
          <Aside>
            <Filtro />
          </Aside>

          <Article carrinhoToggle={this.state.carrinhoToggle}>
            <Produtos />
          </Article>
          {!this.state.carrinhoToggle ? <Carrinho /> : ''}
        </Section>
      </Main>
    );
  }
}

export default App;
