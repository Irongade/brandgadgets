import React from 'react'

// styles
import { Container, Button , Main} from '../styles/globalStyles'
import { RequestButtonContainer, RequestFormContainer, RequestQuoteContainer, RequestQuoteDiv, RequestUploadContainer, RequestUploadItem, RequestUploadItemText } from '../styles/requestFormStyles'
// components
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import BaseCard from '../components/BaseCard'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import TextAreaInput from '../components/TextAreaInput'
import Footer from '../components/Footer'

const RequestForm = () => {
    return (
        <>
            <Header noBoxShadow={true} />
            <Main>
                <Container>
                    <PageHeader title="Request Quote" />
                    <RequestFormContainer>
                        <RequestQuoteContainer>
                            <BaseCard title={"Quote Request Form"}>
                                <RequestQuoteDiv>

                                    <TextInput halfWidth type="text" label="Item Needed" placeholderText="Placeholder" />
                                    <TextInput halfWidth type="text" label="Quantity" placeholderText="Placeholder" />

                                </RequestQuoteDiv>

                                <RequestQuoteDiv>

                                    <TextInput halfWidth type="text" label="Material" placeholderText="Placeholder" />
                                    <SelectInput halfWidth type="text" label="Quantity" placeholderText="Placeholder" />

                                </RequestQuoteDiv>

                                <TextAreaInput noMargin label="Additional Note" rows="5" />
                            </BaseCard>
                        </RequestQuoteContainer>

                        <RequestUploadContainer>
                            <BaseCard>
                                <RequestUploadItem>
                                    <RequestUploadItemText>
                                        {`Upload sample image (PNG & JPG)`}
                                    </RequestUploadItemText>
                                    <RequestUploadItemText>
                                        Click to upload 
                                    </RequestUploadItemText>
                                </RequestUploadItem>

                                <RequestUploadItem>
                                    <RequestUploadItemText>
                                        {`Upload sample image (PNG & JPG)`}
                                    </RequestUploadItemText>
                                    <RequestUploadItemText>
                                        Click to upload 
                                    </RequestUploadItemText>
                                </RequestUploadItem>
                            
                            </BaseCard>
                        </RequestUploadContainer>

                    </RequestFormContainer>
                    <RequestButtonContainer>
                        <Button fluid> Submit Request </Button>
                    </RequestButtonContainer>
                </Container>
            </Main>
            <Footer />
        </>
    )
}

export default RequestForm
