import React from 'react'
import { ModalContainer, ModalContent, ModalTitle, ModalWrapper } from '../styles/modalStyles'

const Modal = ({children, modal, setShowModal}) => {
    return (
        <ModalContainer onClick={() => setShowModal(!modal)} visible={modal} >
            <ModalWrapper visible={modal}>
                    {children}
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal
