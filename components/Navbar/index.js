import styled from 'styled-components'
import Image from 'next/image';
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container isOpen={isOpen}>
        {!isOpen && <Image src="/images/logobranco.svg" alt="Logo da empresa" height={60} width={60}/>}
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} aria-pressed={isOpen}> 
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="#hero">início</MenuLink>
            {!isOpen && <Line/>}
            <MenuLink href="#">colaborador</MenuLink>
            {!isOpen && <Line/>}
            <MenuLink href="#producao" onClick={() => setIsOpen(false)}>produção</MenuLink>
            {!isOpen && <Line/>}
            <MenuLink href="#cultivar">cultivares</MenuLink>
            {!isOpen && <Line/>}
            <MenuLink href="#contato">contato</MenuLink>
            {!isOpen && <Line/>}
            <MenuLink href="#">cadastro cliente</MenuLink>
          </LinkWrapper>
        </Menu>
        { isOpen && <Hamburger aria-hidden="true"/>}
      </Container>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
  background: #C02A27;
  width: 100vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.isOpen ? 'row-reverse' : 'row'};
  align-items: ${props => props.isOpen ? 'flex-start' : 'center'};
  justify-items: center;
  width: 100%;


  @media (max-width: 965px) {
    justify-content: space-between;
  }
`;

const Line = styled.span`
  height: 50px;
  width: 2px;
  background: #FFD6A9;
`; 

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  

  @media (max-width: 965px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    width: 100%;
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  font-family: 'Comfortaa', cursive;
  padding: 20px 30px;
  letter-spacing: 1px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 965px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.button`
  flex-direction: column;
  display: flex;
  cursor: pointer;
  border:none!important;
    background-color: #C02A27!important;
  
  margin-right: 40px;
  margin-top: ${props => props.isOpen ? '21px' : '0'};

  span{
    height: 2px ;
    width: 25px;
    background-color: #4FB340;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media(min-width: 965px) {
    display: none;
  }
`;