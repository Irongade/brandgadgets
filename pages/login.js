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

const Login = () => {
    return (
        <>
            <AuthHeader />
            <AuthMainContainer smallerHeight>
                  <AuthBannerContainer /> 

                  <AuthContentContainer>

                      <AuthContentDiv>
                        <AuthContentTitle>
                            Sign In
                        </AuthContentTitle>
                        <AuthContentText>
                            Lets jump right back into your account.
                        </AuthContentText>

                        <AuthInputContainer>
                            <TextInput label={'Email'} placeholderText={'Placeholder'} />
                            <TextInput label={'Password'} placeholderText={'Placeholder'} />

                            <AuthButtonContainer>
                                <Button fluid> Sign In </Button>
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

export default Login
