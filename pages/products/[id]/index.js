import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// styles
import { Button, Container, Flex, Main } from '../../../styles/globalStyles';
import { 
    ProductCarouselDiv, 
    ProductContainer, 
    ProductDescriptionText, 
    ProductSectionTitle, 
    ProductImageContainer, 
    ProductImageDiv, 
    ProductInfoDiv, 
    ProductInfoText, 
    ProductItemContainer, 
    ProductItemTitle,
    ProductSizeText,
    ProductCarouselImageDiv,
    ProductButtonDiv,
    SizeBarContainer,
    ProductListContainer
} from '../../../styles/productsPageStyles';

// ../
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import BaseCard from '../../../components/BaseCard';
import Rating from '../../../components/Rating';
import SizeBar from '../../../components/SizeBar';
import Radio from '../../../components/Radio';
import TextInput from '../../../components/TextInput'
import TrendingListItem from '../../../components/TrendingListItem';
import List from '../../../components/List';
import Footer from '../../../components/Footer'

// assets
import ProductItemImage from '../../../public/images/ProductItem.png';
import CarouselImage from '../../../public/images/CarouselImage.png';


const ProductItem = () => {
    const router = useRouter()

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
      };


      const customizeItem = () => {
        router.push('/products/22/customize')
      }

      const goToCart = () => {
        router.push('/cart')
      }

    return (
        <>
        <Header noBoxShadow={true} />
        <Main>
            <Container>
                <PageHeader title={'Product Page'} />

                <ProductContainer indexPage>
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
                        <BaseCard>
                            <ProductItemTitle> Plain T-Shirt </ProductItemTitle>

                            <ProductInfoDiv>
                                <ProductInfoText> Product SKU: TS1033838 </ProductInfoText>
                                <Flex>
                                    <ProductInfoText> 20 Reviews </ProductInfoText>
                                    <Rating />
                                </Flex>
                            </ProductInfoDiv>

                            <ProductSectionTitle> Description </ProductSectionTitle>
                            <ProductDescriptionText> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem natoque convallis tellus, quis ipsum quis egestas sollicitudin adipiscing. Sit vel pretium, vestibulum nec purus lacinia phasellus. Nunc nulla euismod facilisi pellentesque euismod. Etiam eu quisque tellus netus. Consectetur at elit vitae dui nibh convallis nec ut. 
                            </ProductDescriptionText>

                            <ProductSectionTitle> Size </ProductSectionTitle>
                            <SizeBarContainer>
                                <SizeBar />
                                <SizeBar />
                                <SizeBar />
                                <SizeBar />
                                <SizeBar />
                                <SizeBar />
                            </SizeBarContainer>
                            <Flex mb="1rem" spaceBetween>
                                <ProductSizeText>Minimum Order Requirement (MOQ): 12</ProductSizeText>
                                <ProductSizeText bold>Quantity: 2</ProductSizeText>

                            </Flex>

                            <ProductSectionTitle> Colors </ProductSectionTitle>

                            <Flex mb="1rem" spaceBetween w="100%">
                                <Radio name="color" text="Hexcode" />
                                <Radio name="color" text="CYMK" />
                                <Radio name="color" text="Pantone Color" />
                            </Flex>

                            <TextInput label="Color Code" placeholderText="Enter color code" />
                        </BaseCard> 

                        <ProductButtonDiv mt="1rem" spaceBetween>
                            <Button fluid secondary marginRight onClick={goToCart}> Back to Cart </Button>
                            <Button fluid onClick={customizeItem} > Customize </Button>
                        </ProductButtonDiv>
                    </ProductItemContainer>
                </ProductContainer>

                <ProductListContainer>
                    <List trendingList title='Always Ordered together' ListComponent={TrendingListItem} data={[1,2,3,4]} />
                </ProductListContainer>
            </Container>
        </Main>
        <Footer />
    </>
    )
}

export default ProductItem
