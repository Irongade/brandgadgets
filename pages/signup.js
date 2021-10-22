import React from 'react'

import AuthHeader from '../components/AuthHeader'
import { 
    AuthBannerContainer, 
    AuthContentContainer, 
    AuthContentTitle, 
    AuthContentDiv, 
    AuthMainContainer, 
    AuthContentText,
    AuthInputContainer,
    AuthButtonContainer,
    AuthFooterText
} from '../styles/authStyles'

// components
import TextInput from '../components/TextInput'
import { Button } from '../styles/globalStyles'

const SignIn = () => {
    return (
        <>
            <AuthHeader />
            <AuthMainContainer>
                  <AuthBannerContainer /> 

                  <AuthContentContainer>

                      <AuthContentDiv>
                        <AuthContentTitle>
                            Sign up
                        </AuthContentTitle>
                        <AuthContentText>
                            Create your own pernal account to shop on BrandGadget
                        </AuthContentText>

                        <AuthInputContainer>
                            <TextInput label={'Full Name'} placeholderText={'Placeholder'} />
                            <TextInput label={'Email'} placeholderText={'Placeholder'} />
                            <TextInput label={'Phone'} placeholderText={'Placeholder'} />
                            <TextInput label={'Password'} placeholderText={'Placeholder'} />

                            <AuthButtonContainer>
                                <Button fluid> Sign Up </Button>
                            </AuthButtonContainer>

                            <AuthFooterText>
                                Don’t have an account? Sign In
                            </AuthFooterText>
                        </AuthInputContainer>

                      </AuthContentDiv>
                  </AuthContentContainer>
            </AuthMainContainer>            
        </>
    )
}

export default SignIn
