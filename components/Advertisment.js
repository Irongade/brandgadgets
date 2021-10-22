import React from 'react'
import { AdvertContainer, AdvertDiv, AdvertText } from '../styles/advertStyles'

const Advertisment = ({fullWidth}) => {
    return (
        <AdvertContainer>
            <AdvertDiv fullWidth={fullWidth} halfWidth={!fullWidth}>
                <AdvertText>
                    Ads
                </AdvertText>
            </AdvertDiv>
            {
                !fullWidth &&
                <AdvertDiv halfWidth={!fullWidth}>
                    <AdvertText>
                        Ads
                    </AdvertText>
                </AdvertDiv>
            }
        </AdvertContainer>
    )
}

export default Advertisment
