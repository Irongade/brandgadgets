import React from 'react'
import { ClientsCardContainer, ClientsCardDiv, ClientsSection, ClientsTitle } from '../styles/clientStyles'

const Clients = () => {
    return (
        <ClientsSection>
            <ClientsTitle>
                Our Clients
            </ClientsTitle>
            <ClientsCardContainer>
                {
                    [1,2,3,4,5,6].map(item => <ClientsCardDiv key={item} />)
                }
                
            </ClientsCardContainer>
        </ClientsSection>
    )
}

export default Clients
