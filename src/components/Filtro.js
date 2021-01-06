import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    display:flex;
    flex-direction:column;
    border:1px solid black;
    height: 80vh;
    width:20vw;
    margin:1vw;

    
    

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    margin: 1vh;

`

const H3 = styled.h3`
    display:flex;
    flex-direction:column;
    margin: 1vh;

`

const Input = styled.input`
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    

`

const Label = styled.label`
    margin-bottom: 0.5rem;
    

`


const Filtro = () =>{
    return(
        <Section>
            <H3>Filtro:</H3>

            <Form>
                <Label>Valor mínimo:</Label>   
                <Input type="number" Value="0"></Input>

                <Label>Valor máximo:</Label>   
                <Input type="number" Value="0"></Input>

                <Label>Buscar produto:</Label>   
                <Input type="text" ></Input>


            </Form>


        </Section>
        
    )


}



export default Filtro;
