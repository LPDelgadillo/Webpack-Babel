import React, { Component } from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
    border: 2px solid red;
    text-align: center;
`
const Sh2 = styled.h2`
color: red;
font-family: monospace;
`
class Componente2 extends Component {
    render() {
        return (
            <Scontainer>
            
                <Sh2>Mostrar product soy el Componente2</Sh2>
                
            </Scontainer>
        );
    }
}

export default Componente2;
