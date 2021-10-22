import React from 'react';
import Link from 'next/link'

import { AuthHeaderContainer } from '../styles/authStyles';

// assets
import {ReactComponent as BrandLogo} from '../assets/svgs/BrandLogo.svg'

const AuthHeader = () => {
    return (
        <AuthHeaderContainer>
            <Link href="/" passHref><BrandLogo /></Link>
        </AuthHeaderContainer>
    )
}

export default AuthHeader
