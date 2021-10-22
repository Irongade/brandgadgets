import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


// styles
import { 
    ProductItemButtonContainer,
    ProductItemContainer, 
    ProductItemDetailsContainer, 
    ProductItemImageContainer,
    ProductItemName,
    ProductItemPrice,
    ProductItemQuantity,
    ProductItemButtonDiv,
    ProductItemCount,
    ProductItemCountText
} from '../styles/productStyles'
import { Button, IncrementButton, DecrementButton } from '../styles/globalStyles';

// assets
import Product from '../public/images/Product.png'
import {ReactComponent as PlusLogo} from '../assets/svgs/plus.svg'
import {ReactComponent as MinusLogo} from '../assets/svgs/Minus.svg'


const ProductItem = () => {
    return (
        <Link href="/products/22" passHref>
            <ProductItemContainer>
                <ProductItemImageContainer>
                    <Image src={Product} alt={'product image'} />
                </ProductItemImageContainer>

                <ProductItemDetailsContainer>
                    <ProductItemName>
                        Bella+Canvas Unisex Jersey T-Shirt 
                    </ProductItemName>
                    <ProductItemPrice>
                        N1500 - N2500
                    </ProductItemPrice>

                    <ProductItemQuantity>
                        Minimum Order Quantity: 12
                    </ProductItemQuantity>
                </ProductItemDetailsContainer>

                <ProductItemButtonContainer>
                    <Button> Add to Cart </Button>

                    <ProductItemButtonDiv>
                        <DecrementButton>  <MinusLogo /> </DecrementButton>
                        <ProductItemCount> 
                            <ProductItemCountText>
                                0
                            </ProductItemCountText>  
                        </ProductItemCount>
                        <IncrementButton> <PlusLogo /> </IncrementButton>
                    </ProductItemButtonDiv>
                </ProductItemButtonContainer>

            </ProductItemContainer>
        </Link>
    )
}

export default ProductItem
