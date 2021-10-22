import React from 'react'
import Modal from './Modal'

import { AlertLogoDiv, AlertModalContainer, AlertModalText, AlertModalTitle } from '../styles/alertStyles'

import {ReactComponent as SuccessLogo} from '../assets/svgs/Success.svg'

const Alert = () => {
    return (
        <Modal>
            <AlertModalContainer>
                <AlertLogoDiv>
                    <SuccessLogo />
                </AlertLogoDiv>
                <AlertModalTitle>
                    Payment Successful
                </AlertModalTitle>
                <AlertModalText>
                    Your order was successfully placed.
                </AlertModalText>
            </AlertModalContainer>
        </Modal>
    )
}

export default Alert
