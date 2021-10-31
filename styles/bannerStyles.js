import styled, { css } from 'styled-components'
import {breakpoints} from './utilStyles'

export const BannerContainer = styled.div`
    height: 83vh;
    margin-top: 17vh;
    background-image: url('/images/Overlay.png');
    position: relative;
    background-size: cover;

    display: flex;
    align-items: center;

    ${breakpoints("margin-bottom", "", [
        { 900: '1rem' },
      ])};

      ${breakpoints("margin-top", "", [
        { 852: '25vh' },
        // { 750: '30vh' },

      ])};

      ${breakpoints("height", "", [
        { 900: '100vh' },
        { 750: '110vh' },
        { 500: '100vh' },
      ])};
`

export const BannerSection = styled.div`
  width: 85%;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: 55% 45%;

  ${breakpoints("grid-template-columns", "", [
    { 900: 'repeat(1, 1fr)' },
  ])};

  ${breakpoints("grid-gap", "", [
    { 900: '1.5rem' },
    { 700: '0rem' },

  ])};
  
`

export const BannerTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    ${breakpoints("padding", "", [
      { 500: '0.5rem 0px' },
    ])};
`

export const BannerTitle = styled.h1`
    margin: 0;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.h1};
    line-height: 4.5rem;
    color: ${props => props.theme.textColor.mediumCyanBlue};

    ${breakpoints("font-size", "", [
      { 900: '3rem' },
    ])};

    ${breakpoints("line-height", "", [
      { 900: '3.25rem' },
    ])};
`

export const BannerText = styled.p`
    margin: 0;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.lg};
    line-height: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.textColor.mediumCyanBlue};

    ${breakpoints("font-size", "", [
      { 500: '1rem' },
    ])};
`

export const BannerImageContainer = styled.div`

`
export const BannerImage = styled.img`

`
