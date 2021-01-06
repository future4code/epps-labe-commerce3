import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  overflow-x: hidden;
  color: #1e1e1e;
`;

const Header = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Aside = styled.aside`
  height: 100vh;
  width: 20vw;
  display: flex;
  justify-content: center;
`;

const Article = styled.article`
  max-width: 60vw;
  min-width: ${(props) => (props.carrinhoToggle ? '75vw' : '55vw')};
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: lemonchiffon;
`;

const Button = styled.button`
  background-color: lemonchiffon;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  color: #1e1e1e;
  border-radius: 5px;

  &:hover {
    background-color: #ece7b8;
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
            <Filtro/>
          </Aside>
          <Article carrinhoToggle={this.state.carrinhoToggle}>
            <h2>Produtos</h2>
          </Article>
          {!this.state.carrinhoToggle ? <Carrinho /> : ''}
        </Section>
      </Main>
    );
  }
}

export default App;
