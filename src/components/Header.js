import React from 'react'
import Button from './Button'
import { Container } from './style/Container.styled'
import { StyledLogo, StyledHeader, Nav, ImageStyled } from './style/Header.styled'
import logo from '../images/logo.svg'
import imgTwo from '../images/illustration-mockups.svg'
import { StyledFlex } from './style/Flex.style'


function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <StyledLogo src={logo} />
                    <Button bg="" color="" text={"search"} />
                </Nav>
                <StyledFlex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. you have a voice, but so does you audience.
                            Create connectiosn with your user as you engage in genuine discussion.
                        </p>
                        <Button bg="#ff0099" color="#fff" text="Get Started for Free" />
                    </div>
                    <ImageStyled src={imgTwo} alt="" srcset="" />
                </StyledFlex>
            </Container>

        </StyledHeader>
    )
}

export default Header
