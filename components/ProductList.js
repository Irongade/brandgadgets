import React from 'react';
import { ProductListContainer } from '../styles/productStyles';

// components
import List from './List'
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <ProductListContainer>
            <List title={'Our Deals Today'} data={[1,2,3,4,5,6,7,8,9,10,11,12]} ListComponent={ProductItem} />
        </ProductListContainer>
    )
}

export default ProductList
