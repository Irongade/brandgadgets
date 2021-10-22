import React, {useState, useRef} from 'react'
import { 
    BaseCardContainer, 
    BaseCardFooterContainer, 
    BaseCardFooterDiv, 
    BaseCardFooterText, 
    BaseCardTitle, 
    BaseCardTitleContainer, 
    BaseContentContainer,
    BaseCardLogoDiv
} from '../styles/baseCardStyles'

import {ReactComponent as DropDownLogo} from '../assets/svgs/dropdown.svg'

const BaseCard = ({children, title, label, value, marginBottom, dropdown, halfPadding, helpPage}) => {

    const contentRef = useRef(null)
    const [showContent, setShowContent] = useState(!dropdown)

    const displayContent = () => {
        if (dropdown) {
            setShowContent(!showContent)
        }
    }

    return (
        <BaseCardContainer marginBottom={marginBottom}>
            {
                title && <BaseCardTitleContainer onClick={() => displayContent()}>
                <BaseCardTitle helpPage={helpPage}> {title} </BaseCardTitle>
                {
                    dropdown && <BaseCardLogoDiv> 
                        <DropDownLogo style={{transform: showContent ? 'rotate(-180deg)' : 'rotate(0)'}} />
                    </BaseCardLogoDiv>
                }
                
            </BaseCardTitleContainer>
            }
            
            <BaseContentContainer ref={contentRef} dropdown={dropdown} active={showContent} halfPadding={halfPadding}>
                {children}
            </BaseContentContainer>

            
                {
                    value && <BaseCardFooterContainer>
                        <BaseCardFooterDiv>
                            <BaseCardFooterText> {label} </BaseCardFooterText>
                            <BaseCardFooterText> {value} </BaseCardFooterText>
                        </BaseCardFooterDiv>
                    </BaseCardFooterContainer>
                }
        </BaseCardContainer>
    )
}

export default BaseCard
