import React from 'react';
import Image from 'next/image'

// styles
import { Button, Container, Flex, GridContainer } from '../styles/globalStyles';
import { ShoppingListContainer, ListContainer, ShoppingItemContainer, ShoppingItemImageDiv, ShoppingItemDiv, ShoppingItemText, ShoppingTotalDiv } from '../styles/shoppingListStyles';

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
            <main style={{marginTop: '20vh'}}>
                <Container>
                    <PageHeader title={'Shopping List'} />
                    <ShoppingListContainer>
                        <ListContainer>
                            <BaseCard title="Christmas Shopping List">
                                <GridContainer columns="1fr 1fr" gap="1rem">
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                    <ShoppingItem />
                                </GridContainer>

                                <ShoppingTotalDiv>
                                        <Flex mt="1rem" w="25%" spaceBetween>
                                            <ShoppingItemText bold>
                                                Total Amount 
                                            </ShoppingItemText>
                                            <ShoppingItemText bold>
                                                N200,000.00
                                            </ShoppingItemText>
                                        </Flex>
                                        <Flex mt="1rem" w="20%">
                                            <Button fluid secondary> Re-Order </Button>
                                        </Flex>
                                </ShoppingTotalDiv>
                            
                            </BaseCard>
                        </ListContainer>
                    </ShoppingListContainer>
                </Container>
            </main>
            <Footer />   
        </>
    )
}

export default ShoppingList
