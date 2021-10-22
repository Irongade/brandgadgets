import React from 'react'
import { useRouter } from 'next/router'
import { PageHeaderContainer, PageHeaderLogoContainer, PageHeaderTitle } from '../styles/globalStyles'

// assets
import {ReactComponent as GoBackLogo} from '../assets/svgs/GoBack.svg'

const PageHeader = ({title}) => {

    const router = useRouter()

    const goBack = () => {
        router.back();
    }

    return (
        <PageHeaderContainer onClick={goBack}>
            <PageHeaderLogoContainer>
                <GoBackLogo style={{marginRight: '1rem'}} />
            </PageHeaderLogoContainer>
            <PageHeaderTitle>
                {title}
            </PageHeaderTitle>
        </PageHeaderContainer>
    )
}

export default PageHeader
