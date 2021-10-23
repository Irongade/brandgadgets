import React from 'react';
import { useRouter } from 'next/router'

// styles
import { Container, Main, Button} from '../styles/globalStyles';
import { 
    CartContainer, 
    YourItemsContainer, 
    YourOrdersContainer,
    ButtonContainer
} from '../styles/cartStyles';

// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BaseCard from '../components/BaseCard';
import CartItem from '../components/CartItem';
import Orders from '../components/Orders';
import Footer from '../components/Footer'

const Cart = () => {
    const router = useRouter()

      const goHome = () => {
        router.push('/')
      }

      const goToCheckout = () => {
        router.push('/checkout')
      }


    return (
        <>
        <Header noBoxShadow={true} />
        <Main>
            <Container>
                <PageHeader title="My Cart" />

                <CartContainer>
                    <YourItemsContainer>
                        <BaseCard title="Your Items">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </BaseCard>
                    </YourItemsContainer>
                    <YourOrdersContainer>
                        <Orders />
                        <ButtonContainer mt="3rem">
                            <Button halfWidth secondary onClick={goHome}>
                                Continue Shopping
                            </Button>
                            <Button halfWidth onClick={goToCheckout}>
                                Check Out
                            </Button>
                        </ButtonContainer>
                    </YourOrdersContainer>
                </CartContainer>
            </Container>
        </Main>
        <Footer />
    </>
    )
}

export default Cart;
