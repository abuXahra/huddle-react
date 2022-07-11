import React from 'react'
import { StyledFlex } from './style/Flex.style'
import { Container } from './style/Container.styled'
import Logo from '../images/logo_white.svg'
import { StyledFooter } from './style/Footer.style'

const Footer = () => {

    const brief = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam autem maxime assumenda sint nostrum praesentium dolorem! Natus recusandae magnam aspernatur deleniti temporibus sint voluptatem iste neque vero id inventore nemo sapiente non sunt, ad sed! Voluptates beatae officiis quod amet."
    return (
        <StyledFooter>
            <Container>
                <img src={Logo} alt="" srcset="" />
                <StyledFlex>
                    <ul>
                        <li>
                            {brief.substring(0, 100)}
                        </li>
                        <li>
                            +1-543-123-4567
                        </li>
                        <li>
                            example@huddle.com
                        </li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    Social Icons
                </StyledFlex>
                <p style={{ textAlign: "center" }}>&copy; 2021 Huddle. All rights reserve</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer
