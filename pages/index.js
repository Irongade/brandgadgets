import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Container } from '../styles/globalStyles'

// components
import Header from '../components/Header'
import Banner from '../components/Banner'
import DropDownSection from '../components/DropDownSection'
import Advertisment from '../components/Advertisment'
import TrendingCategoryList from '../components/TrendingCategoryList'
import ProductList from '../components/ProductList'
import TrustUs from '../components/TrustUs'
import Clients from '../components/Clients'
import CustomerFeedBack from '../components/CustomerFeedBack'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <main style={{position: 'relative'}}>
      <Banner />
      <Container>
        <DropDownSection />
        <Advertisment />
        <TrendingCategoryList />
        <ProductList />
        <Advertisment fullWidth />
        <TrustUs />
        <Clients />
      </Container>
      <CustomerFeedBack /> 
    </main>
    <Footer />
    </>
  )
}
