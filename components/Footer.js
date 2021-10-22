import React from 'react'
import Image from 'next/image'
import { 
    FooterContactUsDiv, 
    FooterContactUsLogoDiv, 
    FooterContactUsText, 
    FooterContainer, 
    FooterLogoDiv, 
    FooterSection, 
    FooterText, 
    FooterTitle,
    FooterTopSection,
    FooterBottomSection,
    FooterBottomSectionText
} from '../styles/footerStyles'

// assets
import BrandLogoWhite from '../public/images/BrandLogoWhite.png'
import {ReactComponent as TikTokLogo} from '../assets/svgs/TikTok.svg'
import {ReactComponent as TwitterLogo} from '../assets/svgs/Twitter.svg'
import {ReactComponent as FacebookLogo} from '../assets/svgs/FB.svg'
import {ReactComponent as InstagramLogo} from '../assets/svgs/IG.svg'
import {ReactComponent as LinkedInLogo} from '../assets/svgs/LinkedIn.svg'
import {ReactComponent as TelegramLogo} from '../assets/svgs/Telegram.svg'


const data = [
    {
        title: 'Quick Links',
        links: [
            { 
                name: 'Move Cargos',
                link: ''
            },
            { 
                name: 'Patner with US',
                link: ''
            },
            { 
                name: 'Fleets',
                link: ''
            },
            { 
                name: 'Privacy Policy',
                link: ''
            },
        ]
    },
    {
        title: 'About Us',
        links: [
            { 
                name: 'Our Roadmap',
                link: ''
            },
            { 
                name: 'Careers',
                link: ''
            },
            { 
                name: 'Press',
                link: ''
            },
            { 
                name: 'Blog',
                link: ''
            },
            { 
                name: 'Contacts',
                link: ''
            },
        ]
    }
]

const Footer = () => {
    return (
        <>
        <FooterSection>
            <FooterTopSection>
                {
                        data.map(item => <FooterContainer key={item.title}>
                    
                            <FooterTitle> {item.title} </FooterTitle>
                            {
                                item.links.map(link => <FooterText key={link.name}>{link.name}</FooterText>)
                            }
                        </FooterContainer>
                        )
                }

                <FooterContainer flex={'3'}>
                    <FooterLogoDiv>
                        <Image src={BrandLogoWhite} alst="brand logo" />
                    </FooterLogoDiv>
                        {/* <BrandLogoWhite/> */}

                    <FooterText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit fermentum velit lacus vel. Ante vitae varius elementum ipsum maecenas consequat fringilla. Euismod id mauris nisl eget.
                    </FooterText>

                    <FooterContactUsDiv>
                        <FooterContactUsText>
                            Our Community
                        </FooterContactUsText>

                        <FooterContactUsLogoDiv>
                            <FacebookLogo />
                            <LinkedInLogo />
                            <InstagramLogo />
                            <TelegramLogo />
                            <TwitterLogo />
                            <TikTokLogo />
                        </FooterContactUsLogoDiv>
                    </FooterContactUsDiv>
                </FooterContainer>
            </FooterTopSection>
            <FooterBottomSection>
                <FooterBottomSectionText>
                    © 2021 BrandGadgets | Terms of Service | Cookie Declaration
                </FooterBottomSectionText>
            </FooterBottomSection>
        </FooterSection>
       
        </>
    )
}

export default Footer
