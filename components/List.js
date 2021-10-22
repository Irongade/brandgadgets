import React from 'react'
import { ListContainer, ListGrid, ListTitle } from '../styles/listStyles'

const List = ({title, ListComponent, data, trendingList, searchPage }) => {
    return (
        <ListContainer>
            <ListTitle> {title} </ListTitle>

            <ListGrid searchPage={searchPage} trendingList={trendingList}>
                {
                    ListComponent &&  data.map(i =>  <ListComponent key={i} />) 
                }
                
            </ListGrid>
            
        </ListContainer>
    )
}

export default List
