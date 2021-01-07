import React from 'react';
import styled from 'styled-components';

const ProdutoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Produto = (props) => {
  return <ProdutoDiv>{props.name}</ProdutoDiv>;
};

export default Produto;
