import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderPortafolio = styled.header`
    width: 100%;    /*Para que ocupe el 100" del ancho de la pagina*/
    background: #4E94AB;
`
const InputBtnMnu = styled.input`
    display: none;
`

const LabelBtnMnu = styled.label`
    display: none;
    width: 30px;
    height: 30px;
    padding: 10px;
    border-right: 1px solid #fff;
`

const UlNav = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
`
const LiNav = styled.li`
    border-right: 1PX solid #fff;
`
export default class Header extends Component {
  render() {
    return (
      <HeaderPortafolio>
          <InputBtnMnu></InputBtnMnu>
          <LabelBtnMnu><img className="iconMenu" src="../styled/iconomenu.png" alt="" /></LabelBtnMnu>
          <nav className='menu'>
              <UlNav>
                  <LiNav><a href="">Inicio</a></LiNav>
                  <LiNav><a href="">Quien Soy</a></LiNav>
                  <LiNav><a href="">Proyectos</a></LiNav>
                  <LiNav><a href="">Contacto</a></LiNav>
              </UlNav>
          </nav>
      </HeaderPortafolio>
    )
  }
}
