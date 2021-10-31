import React, {useState} from 'react'
import { Flex, Text, IncrementButton, DecrementButton} from '../styles/globalStyles'
import Slider from "react-slick";

import BaseCard from './BaseCard'

// styles
import { 
    ProductItemCount,
    ProductItemCountText
} from '../styles/productStyles'

// assets
import {ReactComponent as PlusLogo} from '../assets/svgs/plus.svg'
import {ReactComponent as MinusLogo} from '../assets/svgs/Minus.svg'

const SizeBar = () => {
    const [size, setSize] = useState(0)

    return (
        <Flex spaceBetween>
            <Flex w="35%" alignStretch>
                <BaseCard>
                    <Text bold textCenter>
                        XXXL
                    </Text>
                </BaseCard>
            </Flex>
            <Flex w="60%">
                <BaseCard halfPadding>
                    <Flex spaceBetween>
                        <DecrementButton h="2.5rem" onClick={() => setSize(() => size > 0 ? size - 1 : 0)}>  <MinusLogo /> </DecrementButton>
                            <ProductItemCount> 
                                <ProductItemCountText>
                                    {size}
                                </ProductItemCountText>  
                            </ProductItemCount>
                            <IncrementButton h="2.5rem" onClick={() => setSize(size + 1)}> <PlusLogo /> </IncrementButton>
                    </Flex>
                </BaseCard>
            </Flex>
        </Flex>
    )
}

export default SizeBar
