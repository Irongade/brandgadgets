import React from 'react'
import Image from 'next/image'

import { 
    CustomerFeedbackCardContainer, 
    CustomerFeedbackSection, 
    CustomerFeedbackTitle, 
} from '../styles/customerFeedBackStyles'

// assests
import Avatar from '../public/images/Avatar.png'

// components
import CustomerCard from './CustomerCard'

const CustomerFeedBack = () => {
    return (
        <CustomerFeedbackSection>
            <CustomerFeedbackTitle> 
                What Our Customers Say About Us
            </CustomerFeedbackTitle>

            <CustomerFeedbackCardContainer>
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />

            </CustomerFeedbackCardContainer>
        </CustomerFeedbackSection>
    )
}

export default CustomerFeedBack
