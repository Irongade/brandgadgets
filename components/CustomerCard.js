import React from 'react'
import Image from 'next/image'

import { 
    CustomerDiv, 
    CustomerFeedbackCardContainer, 
    CustomerFeedbackCardDiv, 
    CustomerFeedbackText, 
    CustomerImageDiv, 
    CustomerTextDiv,
    CustomerName,
    CustomerWork,
    CustomerImageContainer
} from '../styles/customerFeedBackStyles'

// assests
import Avatar from '../public/images/Avatar.png'

const CustomerFeedBack = () => {
    return (
        <CustomerFeedbackCardDiv>
            <CustomerFeedbackText>
                {`If you have an idea, go for it. You don't know who else is watching and how they might be encouraged to go for something, too. I firmly believe that we all have something significant to contribute and brandgadgets can help you achieve that.`}
            </CustomerFeedbackText>
            <CustomerDiv>
                <CustomerImageDiv>
                    <CustomerImageContainer>
                        <Image src={Avatar} alt="avatar" />
                    </CustomerImageContainer>
                </CustomerImageDiv>
                <CustomerTextDiv>
                    <CustomerName> Adesola Adeyinka </CustomerName>
                    <CustomerWork> CEO Coralstone Capital </CustomerWork>
                </CustomerTextDiv>

            </CustomerDiv>
        </CustomerFeedbackCardDiv>
    )
}

export default CustomerFeedBack
