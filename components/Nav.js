import React, {useState} from 'react'
import Link from 'next/link'

// import { Container } from '../styles/globalStyles'
import { NavContainer, NavDiv, NavText, Menu } from '../styles/navStyles'

const Nav = ({visible, setVisible}) => {
    // const [visible, setVisible] = useState(false)
    return (
        <NavContainer visible={visible}>
            <Menu>
                    {/* <button onClick={() => setVisible(!visible)}> */}
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                <NavDiv menu dropdown visible={visible}>
                    <Link href='/request-form' passHref><NavText dropdownText> Get Quote </NavText></Link>
                    <Link href='/order-tracking' passHref><NavText dropdownText> Track Order </NavText></Link>
                </NavDiv>
            </Menu>
            <NavDiv menu>
                <Link href='/request-form' passHref><NavText> Get Quote </NavText></Link>
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
