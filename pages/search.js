import React from 'react'

// styles
import { Button, Container, Main, Flex } from '../styles/globalStyles';
import { 
    SearchContainer, 
    SearchCriteriaContainer, 
    SearchCriteriaTitle, 
    SearchItemsContainer, 
    SearchList,
    SearchCriteriaMobileContainer,
    SearchCriteriaMobileTitle
} from '../styles/searchStyles';

// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BaseCard from '../components/BaseCard';
import CheckBox from '../components/CheckBox'
import List from '../components/List';
import ProductItem from '../components/ProductItem'
import Footer from '../components/Footer'

const Search = () => {
    return (
        <>
        <Header noBoxShadow={true} />
        <Main>
            <Container>
                <PageHeader title={'Search Result'} />
                <SearchContainer>
                    <SearchCriteriaContainer>
                        <BaseCard>
                            <Flex mb="1rem" flexStart column>
                                <SearchCriteriaTitle>
                                    Sort By
                                </SearchCriteriaTitle>
                                <CheckBox mediumWeight text="Newest Arrivals" />
                                <CheckBox mediumWeight text="Product Rating" />
                                <CheckBox mediumWeight text="Low MOQ" />
                                <CheckBox mediumWeight text="High MOQ" />
                            </Flex>

                            <Flex mb="1rem" flexStart column>
                                <SearchCriteriaTitle>
                                    Size
                                </SearchCriteriaTitle>
                                <CheckBox mediumWeight text="S" />
                                <CheckBox mediumWeight text="L" />
                                <CheckBox mediumWeight text="M" />
                                <CheckBox mediumWeight text="XL" />
                                <CheckBox mediumWeight text="XXL" />
                                <CheckBox mediumWeight text="XXXL" />
                            </Flex>

                            <Flex mb="1rem" flexStart column>
                                <SearchCriteriaTitle>
                                    Material
                                </SearchCriteriaTitle>
                                <CheckBox mediumWeight text="100% Cotton" />
                                <CheckBox mediumWeight text="Polyester" />
                                <CheckBox mediumWeight text="Polo" />
                            </Flex>

                            <Flex mb="1rem" flexStart column>
                                <SearchCriteriaTitle>
                                    Shipped From
                                </SearchCriteriaTitle>
                                <CheckBox mediumWeight text="Abroad" />
                                <CheckBox mediumWeight text="Nigeria" />
                            </Flex>
                        </BaseCard>
                        
                    </SearchCriteriaContainer>

                    <SearchCriteriaMobileContainer spaceBetween>
                        <SearchCriteriaMobileTitle> Sort </SearchCriteriaMobileTitle>
                        <SearchCriteriaMobileTitle> Filter </SearchCriteriaMobileTitle>
                    </SearchCriteriaMobileContainer>

                    <SearchItemsContainer>
                            <SearchList> 
                                {
                                    [1,2,3,4,5,6,7,8,9,10,11,12].map(item => <ProductItem key={item} />)
                                }
                            
                            </SearchList>

                    </SearchItemsContainer>

                </SearchContainer>

            </Container>
        </Main>
        <Footer />
        </>
    )
}

export default Search
