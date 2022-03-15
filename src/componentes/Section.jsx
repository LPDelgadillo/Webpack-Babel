import React, { Component } from 'react'

const SeccionPortafolio = styled.section`
    background: #D9D9D9;
`
const H1QuienSoy = styled.h1`
    color: #262522;
`
const SpanNombre = styled.span`
    color: #BF4904;
`

export default class Section extends Component {
  render() {
    return (
        <SeccionPortafolio className="quienSoy">
               <H1QuienSoy>Quien Soy?.. Mi Nombre es <SpanNombre>Lizeth Paola Delgadillo Robayo</SpanNombre></H1QuienSoy>
               <H3Profesion>Frontend Development</H3Profesion>
        </SeccionPortafolio>
    )
  }
}
