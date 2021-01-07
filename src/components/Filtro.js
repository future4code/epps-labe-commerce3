import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 1vw;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  margin: 1rem;
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

const Filtro = () => {
  return (
    <Section>
      <H3>Filtro:</H3>

      <Form>
        <FormControl>
          <Label>Valor mínimo:</Label>
          <Input type="number" Value="0"></Input>
        </FormControl>

        <FormControl>
          <Label>Valor máximo:</Label>
          <Input type="number" Value="0"></Input>
        </FormControl>

        <FormControl>
          <Label>Buscar produto:</Label>
          <Input type="text"></Input>
        </FormControl>
      </Form>
    </Section>
  );
};

export default Filtro;
