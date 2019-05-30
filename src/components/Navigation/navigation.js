import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo/logo.png';
import { IoMdPerson } from "react-icons/io";

const Nav = styled.nav`
    width:100%;
    margin: 0;
    padding: 0;
    height: 100%;
`

const Menu = styled.div`
    width: 100%;
    background: #f7f8f9;
    float: right;
    height:26px;
    padding:5px;
    text-decoration:none;
    list-style-type:none;
    `

const MenuElements = styled.li`
    margin-right:15px;
    float: right;
    padding: 0 10px;
    border-left: 1px solid #ddd;
    height: 24px;
    text-decoration:none;
    cursor:pointer;
    font-size: 24px;
    color:#000;

`

const MainMenu = styled.ul`
    max-width: 960px;
    background: #fff;
    margin:0 auto;
    display: flex;
    padding: 10px;
    text-decoration:none;
    list-style-type:none;
`
const MainMenuElements = styled.li`
    padding: 16px;
`

const MainMenuLinks = styled.a`

`
const Logo = styled.img`
    max-width:200px;
    height:72px;
    margin-top:10px;

`
const StyledLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
  &:active{
      color:black;
  }
  &:visited{
      color:black;
  }
  &:hover{
      color:black;
  }
`;

const Navigation = () =>{
    return(
        <Nav>
            <Menu>
                <MenuElements><StyledLink to='/logare'><IoMdPerson style={{margin:"0px 5px 0 5px"}}/></StyledLink></MenuElements>
            </Menu>
            <MainMenu>
                <MainMenuElements><StyledLink to='/'><Logo src={logo} alt="DJI ARS Oradea Logo"/></StyledLink></MainMenuElements>
                <MainMenuElements><StyledLink to='/consumator'>Consumator</StyledLink></MainMenuElements>
                <MainMenuElements><StyledLink to='/profesional'>Profesional</StyledLink></MainMenuElements>
                <MainMenuElements><StyledLink to='/enterprise'>Enterprise</StyledLink></MainMenuElements>
                <MainMenuElements><StyledLink to='/piese'>Piese</StyledLink></MainMenuElements>
                <MainMenuElements><MainMenuLinks>Explorati</MainMenuLinks></MainMenuElements>
                <MainMenuElements><MainMenuLinks>Contact</MainMenuLinks></MainMenuElements>
            </MainMenu>
        </Nav>
    );
}

export default Navigation;