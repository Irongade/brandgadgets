import React from 'react'
import { TrustUsCardContainer, TrustUsSection, TrustUsTitle } from '../styles/trustUsStyles'

// components
import TrustUsCard from './TrustUsCard'

const data = [
    {
        title: 'You get the quality your business deserves',
        description: 'We have quality products and services that satisfy our customer needs and demands.'
    },
    {
        title: 'Your brand comes first',
        description: 'Our customers don’t just buy our products, they are buying what our brand stands for and enjoy our services.'
    },
    {
        title: 'You save time and money',
        description: 'Let us help you save time and money while you invest in our products.'
    },
]

const TrustUs = () => {
    return (
        <TrustUsSection>
            <TrustUsTitle>
                Why you should trust us
            </TrustUsTitle>
            <TrustUsCardContainer>

                {
                    data.map(item =>  <TrustUsCard key={item.title} title={item.title} description={item.description}  />)
                }
                
            </TrustUsCardContainer>
        </TrustUsSection>
    )
}

export default TrustUs
