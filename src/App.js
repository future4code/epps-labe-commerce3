import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.section``;
const Aside = styled.aside``;
const Article = styled.article``;

class App extends React.Component {
  render() {
    return (
      <Main>
        <Header>
          <h1>Hello World!</h1>
          <div>
            <ul>
              <li>Home</li>
              <li>Carrinho</li>
            </ul>
          </div>
        </Header>

        <Section>
          <Aside>
            <h3>sidebar filtro</h3>
          </Aside>
          <Article>
            <h2>Main section</h2>
          </Article>
        </Section>
      </Main>
    );
  }
}

export default App;
