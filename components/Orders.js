import React from 'react'

// components
import BaseCard from './BaseCard';

// styles
import { 
    OrderDetailsContainer, 
    OrderName, 
    OrderDetailsDiv, 
    OrderPriceText, 
    OrderVatContainer
} from '../styles/cartStyles';

const Orders = () => {
    return (
        <BaseCard title="Your Order" label="Total" value="N3,000.00">
            <OrderDetailsContainer>
                <OrderName> Bella+Canvas Unisex Jersey T-Shirt </OrderName>
                <OrderDetailsDiv>
                    <OrderPriceText> 12 Pieces </OrderPriceText>
                    <OrderPriceText> N1500,00 </OrderPriceText>
                </OrderDetailsDiv>
            </OrderDetailsContainer>
            <OrderDetailsContainer>
                <OrderName> Bella+Canvas Unisex Jersey T-Shirt </OrderName>
                <OrderDetailsDiv>
                    <OrderPriceText> 12 Pieces </OrderPriceText>
                    <OrderPriceText> N1500,00 </OrderPriceText>
                </OrderDetailsDiv>
            </OrderDetailsContainer>

            <OrderVatContainer>
                <OrderDetailsContainer>
                    <OrderDetailsDiv noMarginBottom>
                        <OrderPriceText> VAT (7.5%) </OrderPriceText>
                        <OrderPriceText> N3,000.00 </OrderPriceText>
                    </OrderDetailsDiv>
                </OrderDetailsContainer>
            </OrderVatContainer>
        </BaseCard>
    )
}

export default Orders
