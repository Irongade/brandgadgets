import React, {useState} from 'react'
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

    const [quantity, setQuantity] = useState(0)

    return (
            <ProductItemContainer>
                <ProductItemImageContainer>
                    <Image src={Product} alt={'product image'} />
                </ProductItemImageContainer>

                <ProductItemDetailsContainer>
                    <Link href="/products/22" passHref>
                        <ProductItemName>
                        Bella+Canvas Unisex Jersey T-Shirt 
                    </ProductItemName>
                    </Link>

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
                        <DecrementButton onClick={() => setQuantity(() => quantity > 0 ? quantity - 1 : 0)}>  <MinusLogo /> </DecrementButton>
                        <ProductItemCount> 
                            <ProductItemCountText>
                                {quantity}
                            </ProductItemCountText>  
                        </ProductItemCount>
                        <IncrementButton onClick={() => setQuantity(quantity + 1)}> <PlusLogo /> </IncrementButton>
                    </ProductItemButtonDiv>
                </ProductItemButtonContainer>

            </ProductItemContainer>
    )
}

export default ProductItem
