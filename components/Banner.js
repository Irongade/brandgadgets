import React from 'react'
import Image from 'next/image'

import { BannerContainer, BannerImageContainer, BannerSection, BannerText, BannerTextDiv, BannerTitle, } from '../styles/bannerStyles'

import AfricaImage from '../public/images/Africa.png'

const Banner = () => {
    return (
            <BannerContainer>
                <BannerSection>
                    <BannerTextDiv>
                        <BannerTitle>
                            Customizable brand promotional items with ease
                        </BannerTitle>
                        <BannerText>
                            Your African one-stop store to order and customize your branded items
                        </BannerText>
                    </BannerTextDiv>

                    <BannerImageContainer>
                        <Image src={AfricaImage} alt="Image of africa" />
                    </BannerImageContainer>
                </BannerSection>
            </BannerContainer>
    )
}

export default Banner
