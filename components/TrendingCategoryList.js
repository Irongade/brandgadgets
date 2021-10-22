import React from 'react'
import List from './List'

import { TrendingListContainer, TrendingListGrid, TrendingListTitle } from '../styles/trendingCategoryStyles'

// components
import TrendingListItem from './TrendingListItem'

const TrendingCategoryList = () => {
    return (
        <TrendingListContainer>
            <List trendingList title='Trending Categories' ListComponent={TrendingListItem} data={[1,2,3,4]} />
        </TrendingListContainer>
    )
}

export default TrendingCategoryList
