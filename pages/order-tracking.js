import React from 'react'

// styles
import { Button, Container, Flex, GridContainer } from '../styles/globalStyles';
import { OrderTrackingContainer } from '../styles/orderTrackingStyles';

// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BaseCard from '../components/BaseCard';
import Footer from '../components/Footer'
import Timeline from '../components/Timeline';


const OrderTracking = () => {
    return (
        <>
              <Header noBoxShadow={true} />
            <main style={{marginTop: '20vh'}}>
                <Container>
                    <PageHeader title={'Order Tracking'} />
                    <OrderTrackingContainer>
                        <BaseCard title='Order Timeline'>
                            <Timeline />
                            <Timeline />
                            <Timeline />

                        
                        </BaseCard>
                    </OrderTrackingContainer>
                </Container>
            </main>
            <Footer />   
        </>
    )
}

export default OrderTracking
