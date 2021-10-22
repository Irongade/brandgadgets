import React from 'react';
import Image from 'next/image';

// styles
import { TrendingItemContainer, TrendingItemImageContainer, TrendingItemText, TrendingItemTextContainer } from '../styles/trendingCategoryStyles';

// assets
import Product from '../public/images/Product.png'

const TrendingListItem = () => {
    return (
        <TrendingItemContainer>
            <TrendingItemImageContainer>
                <Image src={Product} alt={'product image'} />
            </TrendingItemImageContainer>
            <TrendingItemTextContainer>
                <TrendingItemText>
                    Apparel
                </TrendingItemText>
            </TrendingItemTextContainer>
        </TrendingItemContainer>
    )
}

export default TrendingListItem
