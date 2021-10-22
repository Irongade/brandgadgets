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

const ForgotPassword = () => {
    return (
        <>
            <AuthHeader />
            <AuthMainContainer smallerHeight>
                  <AuthBannerContainer /> 

                  <AuthContentContainer>

                      <AuthContentDiv>
                        <AuthContentTitle>
                            Forgot Password
                        </AuthContentTitle>
                        <AuthContentText>
                            Provide your email to get a reset link
                        </AuthContentText>

                        <AuthInputContainer>
                            <TextInput label={'Email'} placeholderText={'Placeholder'} />

                            <AuthButtonContainer>
                                <Button fluid> Reset Password </Button>
                            </AuthButtonContainer>

                            <AuthFooterText>
                                Remembered password? Sign In
                            </AuthFooterText>

                        </AuthInputContainer>

                      </AuthContentDiv>
                  </AuthContentContainer>
            </AuthMainContainer>            
        </>
    )
}

export default ForgotPassword
