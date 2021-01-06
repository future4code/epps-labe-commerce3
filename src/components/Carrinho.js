import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  height: 100vh;
  width: 20vw;
  display: flex;
  justify-content: center;
`;

const Carrinho = () => {
  return (
    <Aside>
      <h2>Carrinho</h2>
    </Aside>
  );
};

export default Carrinho;
