import React from 'react'

// styles
import { Container, Main, } from '../styles/globalStyles';
import { HelpContainer } from '../styles/helpStyles';

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
                <PageHeader title={'Need Help?'} />
                <HelpContainer>

                    <BaseCard marginBottom="1rem" helpPage title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " dropdown >
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut maecenas auctor mi, sit mi aliquam ut. Sagittis, sed porta et ultrices sapien. Eros, ullamcorper nibh phasellus pulvinar. Neque, amet, nibh varius mattis consectetur bibendum tristique. Sed morbi ornare iaculis lorem tincidunt morbi in massa odio. Aliquet neque aliquet massa a neque et malesuada porttitor. Convallis egestas elit lectus vitae nibh faucibus tempus.
                        </p>
                    </BaseCard>

                    <BaseCard marginBottom="1rem"  helpPage title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " dropdown >
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut maecenas auctor mi, sit mi aliquam ut. Sagittis, sed porta et ultrices sapien. Eros, ullamcorper nibh phasellus pulvinar. Neque, amet, nibh varius mattis consectetur bibendum tristique. Sed morbi ornare iaculis lorem tincidunt morbi in massa odio. Aliquet neque aliquet massa a neque et malesuada porttitor. Convallis egestas elit lectus vitae nibh faucibus tempus.
                        </p>
                    </BaseCard>

                    <BaseCard marginBottom="1rem" helpPage title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " dropdown >
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut maecenas auctor mi, sit mi aliquam ut. Sagittis, sed porta et ultrices sapien. Eros, ullamcorper nibh phasellus pulvinar. Neque, amet, nibh varius mattis consectetur bibendum tristique. Sed morbi ornare iaculis lorem tincidunt morbi in massa odio. Aliquet neque aliquet massa a neque et malesuada porttitor. Convallis egestas elit lectus vitae nibh faucibus tempus.
                        </p>
                    </BaseCard>

                </HelpContainer>
            </Container>
        </Main>
        <Footer />

    </>
    )
}

export default Checkout
