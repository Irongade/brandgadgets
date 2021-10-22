import React from 'react'
import { TimelineContainer, TimelineContentContainer, TimelineContentDiv, TimelineContentText, TimelineLogoContainer } from '../styles/timelineStyles'

import {ReactComponent as TimelineLogo} from '../assets/svgs/Timeline.svg' 
import {ReactComponent as TimelineNotDoneLogo} from '../assets/svgs/TimelineNotDone.svg' 


const Timeline = () => {
    return (
        <TimelineContainer>
            <TimelineContentContainer>
                <TimelineLogoContainer>
                    <TimelineLogo />
                </TimelineLogoContainer>

                <TimelineContentDiv>
                    <TimelineContentText bold>Order Placed</TimelineContentText>
                    <TimelineContentText>One of our delivery man just picked up your food will get to you in 45 mins. </TimelineContentText>
                </TimelineContentDiv>
            </TimelineContentContainer>
        </TimelineContainer>
    )
}

export default Timeline
