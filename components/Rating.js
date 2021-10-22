import React from 'react'
import { Flex } from '../styles/globalStyles'

import {ReactComponent as FilledRatingLogo} from '../assets/svgs/FilledRating.svg'
import {ReactComponent as UnfilledRatingLogo} from '../assets/svgs/UnfilledRating.svg'


const Rating = () => {
    return (
        <Flex spaceBetween>
            <FilledRatingLogo style={{marginRight: '1rem'}} />
            <FilledRatingLogo style={{marginRight: '1rem'}} />
            <FilledRatingLogo style={{marginRight: '1rem'}} />
            <FilledRatingLogo style={{marginRight: '1rem'}} />
            <UnfilledRatingLogo  />

        </Flex>
    )
}

export default Rating
