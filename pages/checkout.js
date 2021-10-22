import React from 'react'

// styles
import { Button, Container, Main, GridContainer } from '../styles/globalStyles';

import { ButtonContainer, CheckoutContainer, PaymentModalTitle, CustomerDetailsContainer, CustomerDetailsDiv, CustomerDetailsText, CustomerInputContainer, OrderDetailsContainer, CheckoutGridContainer} from '../styles/checkoutStyles';

// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BaseCard from '../components/BaseCard';
import Radio from '../components/Radio';
import Orders from '../components/Orders';
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput';
import TextAreaInput from '../components/TextAreaInput';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import Footer from '../components/Footer'

const Checkout = () => {
    return (
        <>
        <Header noBoxShadow={true} />
        <Main>
            <Container>
                <PageHeader title={'Checkout'} />
                <CheckoutContainer>

                    <CustomerDetailsContainer>
                        <BaseCard marginBottom="2rem" title="Customer Details">
                            <CheckoutGridContainer columns="1fr 1fr" gap="1rem" responsive={[{700: '1fr'}]}>
                                <TextInput label="First Name" placeholderText="Placeholder" />
                                <TextInput label="First Name" placeholderText="Placeholder" />
                                <TextInput label="First Name" placeholderText="Placeholder" />
                                <TextInput label="First Name" placeholderText="Placeholder" />
                                <TextInput label="First Name" placeholderText="Placeholder" />
                                <SelectInput label="City" placeholderText="Placeholder" />
                                <SelectInput label="State" placeholderText="Placeholder" />
                                <SelectInput label="Country" placeholderText="Placeholder" />
                            </CheckoutGridContainer>
                        </BaseCard>

                        <BaseCard marginBottom="2rem" title="Shipping Address">
                            <GridContainer rows="1fr 1fr" columns="1fr 1fr" gap="1rem">
                                <TextInput label="Address" placeholderText="Placeholder" />
                                <SelectInput label="City" placeholderText="Placeholder" />
                                <SelectInput label="State" placeholderText="Placeholder" />
                                <SelectInput label="Country" placeholderText="Placeholder" />
                            </GridContainer>
                        </BaseCard>

                        <BaseCard marginBottom="2rem" title="Payment Method">
                            <GridContainer rows="1fr" columns="1fr 1fr" gap="1rem">
                                <CustomerDetailsDiv>
                                    <Radio text="Debit Card" name="payment" />
                                    <CustomerDetailsText> Make payment with your bank debit card </CustomerDetailsText>
                                </CustomerDetailsDiv>
                                <CustomerDetailsDiv>
                                    <Radio text="Cash Transfer" name="payment" />
                                    <CustomerDetailsText> Make Payment through bank transfer </CustomerDetailsText>
                                </CustomerDetailsDiv>
                            </GridContainer>
                        </BaseCard>

                        <BaseCard marginBottom="2rem" title="Delivery Method">
                            <GridContainer rows="1fr" columns="1fr 1fr" gap="1rem">
                                <CustomerDetailsDiv>
                                    <Radio text="Pickup" name="delivery" />
                                    <CustomerDetailsText> For this method of delivery you have to go and pick up your order in person </CustomerDetailsText>
                                </CustomerDetailsDiv>
                                <CustomerDetailsDiv>
                                    <Radio text="Door Delivery" name="delivery" />
                                    <CustomerDetailsText> For this method of delivery your order will be delivered to your doorstep </CustomerDetailsText>
                                </CustomerDetailsDiv>
                            </GridContainer>
                        </BaseCard>

                        <TextAreaInput rows="5" label="Additional Note (Optional)" placeholderText="Placeholder" />
                    </CustomerDetailsContainer>

                    <OrderDetailsContainer>
                        <Orders />

                        <ButtonContainer mt="3rem">
                            <Button fluid> Continue </Button>
                        </ButtonContainer>
                    </OrderDetailsContainer>
                </CheckoutContainer>
            </Container>
        </Main>
        <Footer />

        {/* <Modal> 
            <PaymentModalTitle>
                Make Payment
            </PaymentModalTitle>
            <PaymentModalContainer>
                <TextInput label="Card Number" placeholderText="Placeholder" />
            </PaymentModalContainer>
            <PaymentModalContainer>
                <TextInput halfWidth label="Expiry Date" placeholderText="Placeholder" />
                <TextInput halfWidth label="CVV" placeholderText="Placeholder" />
            </PaymentModalContainer>
            <ButtonContainer mt="1rem">
                <Button fluid> Continue </Button>
            </ButtonContainer>
        </Modal> */}
        {/* <Alert /> */}
    </>
    )
}

export default Checkout
