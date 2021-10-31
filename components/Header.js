import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// styles
import {Button } from '../styles/globalStyles'
import {
    HeaderContainer, 
    HeaderSection, 
    HeaderLogoContainer, 
    HeaderLogoIconDiv,
    HeaderSearchContainer, 
    HeaderSearchButton, 
    HeaderSearchInputSpan, 
    HeaderSearchInputDiv, 
    HeaderSearchInput, 
    HeaderIconContainer ,
    HeaderIconDiv,
    HeaderIconText
} from '../styles/headerStyles'
import { DropDownModal, DropDownModalText } from '../styles/modalStyles'

// assets
import {ReactComponent as BrandLogo} from '../assets/svgs/BrandLogo.svg'
import {ReactComponent as SearchLogo} from '../assets/svgs/search 1.svg'
import {ReactComponent as CartLogo} from '../assets/svgs/shopping cart.svg'
import {ReactComponent as UserLogo} from '../assets/svgs/user.svg'
import {ReactComponent as SupportLogo} from '../assets/svgs/Support.svg'

// components
import Nav from './Nav'

const Header = ({noBoxShadow}) => {
    const router = useRouter()

    const [showModal, setShowModal] = useState(false);
    const [visibleNav, setVisibleNav] = useState(false) //  handle this with redux and pass to banner styles and use handle resize hook to set it to false on bigger screens automatically

    const goToLogin = () => {
        setShowModal(false);

        router.push('/login')
    }

    const goToSignUp= () => {
        setShowModal(false);

        router.push('/signup')
    }

    const searchProduct = () => {
        setShowModal(false);

        router.push('/search')
    }

    return (
        <HeaderContainer noBoxShadow={noBoxShadow}>
        <Nav visible={visibleNav} setVisible={setVisibleNav} />
        <HeaderSection visible={visibleNav}>
            <HeaderLogoContainer>
                <Link href="/" passHref><BrandLogo /></Link>

                <HeaderLogoIconDiv>
                    <HeaderIconDiv relative onClick={() => setShowModal(!showModal)}>
                        <UserLogo />

                        <DropDownModal visible={showModal}>
                        <DropDownModalText onClick={goToLogin}> Sign In </DropDownModalText>
                        <Button fluid  onClick={goToSignUp} > Sign Up</Button>
                    </DropDownModal>
                    </HeaderIconDiv>

                    <Link href="/cart" passHref>
                        <HeaderIconDiv>
                            <CartLogo />
                        </HeaderIconDiv>
                    </Link>
                </HeaderLogoIconDiv>
            </HeaderLogoContainer>

            <HeaderSearchContainer>
                <HeaderSearchInputDiv>
                    <HeaderSearchInputSpan>
                        <SearchLogo />
                    </HeaderSearchInputSpan>
                    <HeaderSearchInput type="text" id="search" name="search" placeholder="Search product" />
                </HeaderSearchInputDiv>
                <HeaderSearchButton onClick={searchProduct}>Search</HeaderSearchButton>
            </HeaderSearchContainer>

            <HeaderIconContainer>
            <Link href="/help" passHref>
                <HeaderIconDiv>
                    <SupportLogo />
                    <HeaderIconText> Help </HeaderIconText>
                </HeaderIconDiv>
                </Link>
                <HeaderIconDiv onClick={() => setShowModal(!showModal)} relative>
                    <UserLogo />
                    <HeaderIconText> Account </HeaderIconText>

                    <DropDownModal visible={showModal}>
                        <DropDownModalText onClick={goToLogin}> Sign In </DropDownModalText>
                        <Button fluid  onClick={goToSignUp} > Sign Up</Button>
                    </DropDownModal>
                </HeaderIconDiv>
                <Link href="/cart" passHref>
                    <HeaderIconDiv>
                        <CartLogo />
                    <HeaderIconText> Cart </HeaderIconText>
                    </HeaderIconDiv>
                </Link>
            </HeaderIconContainer>
        </HeaderSection>
        </HeaderContainer>
    )
}

export default Header
