import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// styles
import { Button, Container, Flex, GridContainer, Text, Main } from '../../../styles/globalStyles';
import { 
    ProductCarouselDiv, 
    ProductContainer, 
    ProductDescriptionText, 
    ProductSectionTitle, 
    ProductImageContainer, 
    ProductImageDiv, 
    ProductItemContainer, 
    ProductCarouselImageDiv,
    ProductPositionDiv,
    ProductButtonDiv
} from '../../../styles/productsPageStyles';
import {RequestUploadItemText, RequestUploadItem} from '../../../styles/requestFormStyles'

// components
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import BaseCard from '../../../components/BaseCard';
import Radio from '../../../components/Radio';
import CheckBox from '../../../components/CheckBox';
import TextInput from '../../../components/TextInput'
import Footer from '../../../components/Footer'

// assets
import ProductItemImage from '../../../public/images/ProductItem.png';
import CarouselImage from '../../../public/images/CarouselImage.png';

const Customize = () => {

    const router = useRouter()

    const goToShoppingList = () => {
        router.push('/shopping-list')
    }

    const goToCheckout = () => {
        router.push('/checkout')
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
      };

      const UploadFile = () => {
        return (
            <>
                <RequestUploadItem padding="1rem">
                    <RequestUploadItemText green>
                        Click to upload 
                    </RequestUploadItemText>
                    <RequestUploadItemText>
                        {`Compatible Format: CDR, PDF & SVG `}
                    </RequestUploadItemText>
                </RequestUploadItem>
                <ProductDescriptionText>
                    Please ensure you are uploading only vector. You will be charged an extra fee for redesign if your file is not a vector file.
                </ProductDescriptionText>
                <CheckBox text="I agree to pay for redesign." />

            </>
        )
    }

      const Dimensions = () => {
          return (
                <Flex flexStart column mt="3rem">
                    <ProductSectionTitle> Dimentions (Size) </ProductSectionTitle>
                    <Flex w="100%" spaceBetween>
                        <Flex halfWidth> <TextInput label="Width (cm)" placeholderText="Input number" /> </Flex>
                        <Flex halfWidth> <TextInput label="Height (cm)" placeholderText="Input number" /> </Flex>
                    </Flex>
                </Flex>
          )
      }

      const Position = () => {
        return (
            <Flex w="100%" flexStart column mt="3rem">
                <ProductSectionTitle> Position </ProductSectionTitle>
                <GridContainer rows="1fr 1fr 1fr" columns="1fr 1fr 1fr" gap="1rem">
                    {
                        [1,2,3,4,5,6,7,8,9].map(num => <ProductPositionDiv key={num}>
                                <Text> Top - Left </Text>
                            </ProductPositionDiv>
                        )
                    }
                    
                </GridContainer>
            </Flex>
        )
    }


    return (
        <>
        <Header noBoxShadow={true} />
        <Main>
            <Container>
                <PageHeader title={'Item Customization'} />

                <ProductContainer>
                    <ProductImageContainer>
                        <ProductImageDiv>
                            <Image src={ProductItemImage} alt="product item" />
                        </ProductImageDiv>

                        <ProductCarouselDiv>
                            
                            <Slider {...sliderSettings}>
                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>

                                    <ProductCarouselImageDiv>
                                        <Image src={CarouselImage} alt="carousel div" />
                                    </ProductCarouselImageDiv>
                            </Slider>

                        </ProductCarouselDiv>
                    </ProductImageContainer>

                    <ProductItemContainer>
                        <BaseCard marginBottom="2rem">
                            <ProductSectionTitle> Branding Option </ProductSectionTitle>
                            <GridContainer rows="1fr 1fr 1fr" columns="1fr 1fr" gap="1rem">
                                <CheckBox text="Embroidery" />
                                <CheckBox text="Heat Transfer" />
                                <CheckBox text="Screen Printing" />
                                <CheckBox text="Option 4" />
                                <CheckBox text="Option 5" />
                                <CheckBox text="Option 6" />
                            </GridContainer>
                        </BaseCard> 

                        <BaseCard marginBottom="2rem">
                            <ProductSectionTitle> Branding Color Option </ProductSectionTitle>

                            <GridContainer rows="1fr 1fr" columns="1fr 1fr" gap="1rem">
                               <Radio text="Full Color" name="branding" />
                               <Radio text="One Color" name="branding" />
                               <Radio text="Two Color" name="branding" />
                            </GridContainer>
                        </BaseCard>

                        <BaseCard title="Front" dropdown marginBottom="2rem">
                            <ProductSectionTitle> Upload Logo/Artwork </ProductSectionTitle>
                                <UploadFile />
                                <Dimensions />
                                <Position />
                        </BaseCard>

                        <BaseCard title="Back" dropdown marginBottom="2rem">
                            <ProductSectionTitle> Upload Logo/Artwork </ProductSectionTitle>
                                <UploadFile />
                                <Dimensions />
                                <Position />
                        </BaseCard>

                        <BaseCard title="Sleeve" dropdown marginBottom="2rem">
                            <ProductSectionTitle> Upload Logo/Artwork </ProductSectionTitle>
                                <UploadFile />
                                <Dimensions />
                        </BaseCard>

                        <ProductButtonDiv>
                            <Button fluid secondary marginRight onClick={goToShoppingList}> Save to List </Button>
                            <Button fluid onClick={goToCheckout}> Check Out </Button>
                        </ProductButtonDiv>
                    </ProductItemContainer>
                </ProductContainer>

            </Container>
        </Main>
        <Footer />
    </>
    )
}

export default Customize
