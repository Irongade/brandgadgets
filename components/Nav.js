import React from 'react'
import Link from 'next/link'

// import { Container } from '../styles/globalStyles'
import { NavContainer, NavDiv, NavText, Menu } from '../styles/navStyles'

const Nav = () => {
    return (
        <NavContainer>
            <Menu>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </Menu>
            <NavDiv menu>
                <Link href='/' passHref><NavText> Get Quote </NavText></Link>
                <Link href='/order-tracking' passHref><NavText noMargin> Track Order </NavText></Link>

            </NavDiv>

            <NavDiv>
                <NavText weight="700"> Call Us </NavText>
                <NavText noMargin> +234 809 537 8070 </NavText>
            </NavDiv>
        </NavContainer>
    )
}

export default Nav
