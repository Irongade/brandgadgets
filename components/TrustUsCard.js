import React from 'react'
import { TrustUsCardDiv, TrustUsCardText, TrustUsCardTitle } from '../styles/trustUsStyles'

import {ReactComponent as WhiteCheckLogo} from '../assets/svgs/WhiteCheck.svg';

const TrustUsCard = ({title, description}) => {
    return (
        <TrustUsCardDiv>
            <WhiteCheckLogo />
            <TrustUsCardTitle>
                {title}
            </TrustUsCardTitle>
            
            <TrustUsCardText>
                {description}
            </TrustUsCardText>
        </TrustUsCardDiv>
    )
}

export default TrustUsCard
