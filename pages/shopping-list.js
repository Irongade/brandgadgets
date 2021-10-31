import React from 'react';
import Image from 'next/image'

// styles
import { Button, Container, Flex, GridContainer, Main } from '../styles/globalStyles';
import { ShoppingListContainer, ListContainer, ShoppingItemContainer, ShoppingItemImageDiv, ShoppingItemDiv, ShoppingItemText, ShoppingTotalDiv, ShoppingItemGridContainer, ShoppingItemTextDiv } from '../styles/shoppingListStyles';

// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BaseCard from '../components/BaseCard';
import Footer from '../components/Footer'

// assets
import ShoppingItemImage from '../public/images/ShoppingItem.png'

const ShoppingList = () => {


    const ShoppingItem = () => {
        return (
            <ShoppingItemContainer>
                <ShoppingItemImageDiv>
                    <Image src={ShoppingItemImage}  alt="Shopping item" />
                </ShoppingItemImageDiv>
                <ShoppingItemDiv>
                    <ShoppingItemText>
                        T-Shirts
                    </ShoppingItemText>
                </ShoppingItemDiv>
            </ShoppingItemContainer>
        )
    } 

    return (
        <>
            <Header noBoxShadow={true} />
            <Main>
                <Container>
                    <PageHeader title={'Shopping List'} />
                    <ShoppingListContainer>
                        <ListContainer>
                            <BaseCard title="Christmas Shopping List">
                                <ShoppingItemGridContainer columns="1fr 1fr" gap="1rem">
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                </ShoppingItemGridContainer>

                                <ShoppingTotalDiv>
                                        <ShoppingItemTextDiv mt="1rem" w="25%" spaceBetween>
                                            <ShoppingItemText bold>
                                                Total Amount 
                                            </ShoppingItemText>
                                            <ShoppingItemText bold>
                                                N200,000.00
                                            </ShoppingItemText>
                                        </ShoppingItemTextDiv>
                                        <ShoppingItemTextDiv mt="1rem" w="20%">
                                            <Button fluid secondary> Re-Order </Button>
                                        </ShoppingItemTextDiv>
                                </ShoppingTotalDiv>
                            
                            </BaseCard>
                        </ListContainer>
                    </ShoppingListContainer>
                </Container>
            </Main>
            <Footer />   
        </>
    )
}

export default ShoppingList
