import React from 'react';
import Image from 'next/image'
import { 
    CartItemContainer, 
    CartInfoContainer, 
    CartImageContainer, 
    CartDetailsContainer,
    CartNameText,
    CartPriceText,
    CartDiscountText,
    CartProductDiv,
    CartColorDiv,
    CartProductText,
    ItemColor,
    CartPriceDiv,
    CartQuantityDiv,
    CartQuantityItem,
    CartButtonDiv
} from '../styles/cartStyles';

// assets
import CartItemImage from '../public/images/CartItemImage.png'

// components
import CheckBox from './CheckBox';
import { Button } from '../styles/globalStyles';

const CartItem = () => {
    return (
        <CartItemContainer>
            <CheckBox />

            <CartInfoContainer>
                <CartImageContainer>
                    <Image src={CartItemImage} alt="cart img" />
                </CartImageContainer>

                <CartDetailsContainer>
                    <CartNameText>
                        Bella+Canvas Unisex Jersey T-Shirt
                    </CartNameText>
                    <CartPriceDiv>
                        <CartPriceText>
                            N2,000
                        </CartPriceText>
                        <CartDiscountText> N1,500 - N2,500 </CartDiscountText>

                    </CartPriceDiv>
                    <CartProductDiv>
                        <CartColorDiv>
                            <CartProductText> Color: </CartProductText>
                            <ItemColor></ItemColor>
                        </CartColorDiv>
                        
                        <CartQuantityDiv>
                            <CartProductText> Quantity: </CartProductText>
                            
                            <CartQuantityItem> <CartProductText> S x2 </CartProductText> </CartQuantityItem>
                            <CartQuantityItem> <CartProductText> M x2 </CartProductText> </CartQuantityItem>
                            <CartQuantityItem> <CartProductText> L x2 </CartProductText> </CartQuantityItem>

                        </CartQuantityDiv>

                        <CartButtonDiv>
                            <Button fluid secondary marginRight> Edit </Button>
                            <Button fluid > Customize </Button>
                        </CartButtonDiv>
                    </CartProductDiv>
                </CartDetailsContainer>
            </CartInfoContainer>
        </CartItemContainer>
    )
}

export default CartItem
