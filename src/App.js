import React from 'react';
import styled from 'styled-components';

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

  div.menu {
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

  div.filtro {
    display: flex;
    flex-direction: column;
    margin: 1vw;
    width: 20vw;
  }

  div.carrinho {
    height: 100vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    margin-left: 1rem;

    h2 {
      padding: 1rem;
    }

    div.totalDiv {
      p.total {
        padding-left: 1rem;
      }

      div.carrinhoDiv {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          display: flex;
          justify-content: space-between;

          p {
            padding: 0 0.5rem;
          }

          button.removeItem {
            padding: 0.3rem 0.7rem;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background-color: tomato;
            margin: 0.5rem 1rem;
            font-weight: 900;
            font-size: 1rem;
            color: #fff;
            max-height: 2rem;
            transition: background-color 250ms ease-in;

            &:hover {
              background-color: #e65036;
              transition: background-color 250ms ease-out;
            }
          }
        }
      }
    }
  }
`;

const Article = styled.article`
  min-width: ${(props) => (props.carrinhoToggle ? '75vw' : '50vw')};
  height: 90vh;
  padding: 1rem;
  width: 80%;

  div.productGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2.5rem;
  }
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

// Filtro Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const H3 = styled.h3`
  margin: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #707070;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const FormControl = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

const Select = styled.select`
  padding: 0.5rem;
  width: 100%;
`;

// Carrinho Styled Components
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

// Produtos Styled Components
const Buybtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f75c03;
  color: #ffebf4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #fd7121;
    transition: background-color 250ms ease-out;
  }
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
`;
const Img = styled.img`
  width: 180px;
  max-height: 180px;
  padding-bottom: 0.7rem;
`;
const Produtodiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 1px 1px 15px #cacaca;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const listaDeProdutos = [
  {
    id: 0,
    name: 'camiseta barata',
    value: 49,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 1,
    name: 'blusa1 média',
    value: 79,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 2,
    name: 'camiseta média',
    value: 59,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 3,
    name: 'blusa cara',
    value: 129,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 4,
    name: 'brinquedo caro',
    value: 39,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 5,
    name: 'brinquedo barato',
    value: 19,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 6,
    name: 'blusa muito cara',
    value: 179,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
  {
    id: 7,
    name: 'blusa barata',
    value: 59,
    imgURL: 'https://i.imgur.com/SZ29ybW.png',
  },
];

class App extends React.Component {
  state = {
    carrinhoToggle: false,
    toggledWidth: false,
    total: 0,
    produtos: listaDeProdutos,
    carrinhoItens: [],
    inputFiltroNome: '',
    inputValorMax: 0,
    inputValorMin: 0,
    inputPreco: 'nenhum',
    novaListaFiltrada: [],
  };

  // Abrir sidebar do carrinho
  abrirCarrinho = () => {
    this.setState((prevState) => ({
      carrinhoToggle: !prevState.carrinhoToggle,
    }));
  };

  // Calcula quantidade de produtos
  qtdProdutos = () => {
    let qtdItens = this.state.produtos.length;
    return qtdItens;
  };

  // Adicionar produto ao carrinho
  addToCart = (produto) => {
    const novoProduto = {
      id: Date.now(),
      name: produto.name,
      value: produto.value,
      imgURL: produto.imgURL,
    };

    // Adiciona valor do produto ao valor total do carrinho
    const novoTotal = this.state.total + novoProduto.value;
    // Adiciona novo produto na lista de itens do carrinho
    const listaCarrinho = [novoProduto, ...this.state.carrinhoItens];
    // setState para colocar valores no state
    this.setState({ total: novoTotal });
    this.setState({ carrinhoItens: listaCarrinho });
  };

  // Remove produto do carrinho
  removeFromCart = (produtoId) => {
    const novoCarrinho = this.state.carrinhoItens.filter((produto) => {
      return produtoId !== produto;
    });

    // Exclui valor do produto do total do carrinho
    let novoTotal = 0;
    novoTotal = this.state.total - produtoId.value;
    // setState para retirar valor do total
    this.setState({ total: novoTotal });
    // setState para remover item do state
    this.setState({ carrinhoItens: novoCarrinho });
  };

  filterByMin = () => {};

  onChangeValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  filterByMax = () => {};

  onChangeValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  // Filtra produtos por nome

  onChangeFiltroNome = (event) => {
    this.setState({ inputFiltroNome: event.target.value });
  };

  onChangeFiltroPreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };

  render() {
    // Nova lista filtrada de produtos
    const listaFiltrada = this.state.produtos
      // Filtra produtos por nome
      .filter((produto) => {
        if (produto.name.includes(this.state.inputFiltroNome)) {
          return true;
        }
      })
      // Filtra produtos por valor mínimo
      .filter((produto) => {
        if (produto.value >= this.state.inputValorMin) {
          return true;
        }
      })
      // Filtra produtos por valor máximo
      .filter((produto) => {
        if (produto.value <= this.state.inputValorMax) {
          return true;
        } else if (this.state.inputValorMax === 0) {
          return true;
        }
      })
      // Filtra produtos por preço crescente
      .sort((menor, maior) =>
        this.state.inputPreco === 'crescente'
          ? menor.value - maior.value
          : maior.value - menor.value
      )
      // Filtra produtos por preço decrescente
      .sort((menor, maior) =>
        this.state.inputPreco === 'decrescente'
          ? maior.value - menor.value
          : menor.value - maior.value
      );

    return (
      <Main>
        <Header>
          <h1>Lab E-commerce</h1>
          <div className="menu">
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
            <div className="filtro">
              <H3>Filtro:</H3>

              <Form>
                <FormControl>
                  <Label>Valor mínimo:</Label>
                  <Input
                    type="number"
                    value={this.state.inputValorMin}
                    onChange={this.onChangeValorMin}
                  ></Input>
                </FormControl>

                <FormControl>
                  <Label>Valor máximo:</Label>
                  <Input
                    type="number"
                    value={this.state.inputValorMax}
                    onChange={this.onChangeValorMax}
                  ></Input>
                </FormControl>

                <FormControl>
                  <Label>Buscar produto:</Label>
                  <Input
                    type="text"
                    value={this.state.inputFiltroNome}
                    onChange={this.onChangeFiltroNome}
                  ></Input>
                </FormControl>

                <FormControl>
                  <Label>Filtrar por preço:</Label>
                  <Select
                    value={this.state.inputPreco}
                    onChange={this.onChangeFiltroPreco}
                  >
                    <option value="nenhum">Nenhum filtro</option>
                    <option value="crescente">Preço crescente</option>
                    <option value="decrescente">Preço decrescente</option>
                  </Select>
                </FormControl>
              </Form>
            </div>
          </Aside>

          <Article carrinhoToggle={this.state.carrinhoToggle}>
            <h2>Produtos</h2>
            <p>
              Quantidade de produtos: <span>{this.qtdProdutos()}</span>
            </p>
            <div className="productGrid">
              {listaFiltrada.map((produto) => {
                return (
                  <Produtodiv key={produto.id}>
                    <Img src={produto.imgURL} />
                    <Text>{produto.name}</Text>
                    <Text>R$ {produto.value}</Text>
                    <Buybtn onClick={() => this.addToCart(produto)}>
                      Colocar no Carrinho
                    </Buybtn>
                  </Produtodiv>
                );
              })}
            </div>
          </Article>
          <Aside>
            {!this.state.carrinhoToggle ? (
              <div className="carrinho">
                <h2>Carrinho</h2>

                <div className="totalDiv">
                  <p className="total">Total: R$ {this.state.total}</p>

                  <div className="carrinhoDiv">
                    <h4>
                      {this.state.carrinhoItens.length} itens adicionados:
                    </h4>
                    <Ul>
                      {this.state.carrinhoItens.map((produto) => (
                        <span
                          key={produto.id}
                          name={produto.name}
                          value={produto.value}
                        >
                          <p>{produto.name}</p>
                          <p>R$ {produto.value}</p>
                          <Button
                            onClick={() => this.removeFromCart(produto)}
                            className="removeItem"
                          >
                            X
                          </Button>
                        </span>
                      ))}
                    </Ul>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </Aside>
        </Section>
      </Main>
    );
  }
}

export default App;
