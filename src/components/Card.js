import React from 'react'
import { CardStyled } from './style/Card.style'
import { StyledFlex } from './style/Flex.style'



const Card = ({ item }) => {
    return (
        <CardStyled layout={item.id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
            <div>
                <img src={item.image} alt="" srcset="" />
            </div>
        </CardStyled>
    )
}

export default Card