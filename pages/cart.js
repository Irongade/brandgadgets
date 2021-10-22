import React from 'react';

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
                            <Button halfWidth secondary>
                                Continue Shopping
                            </Button>
                            <Button halfWidth>
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
