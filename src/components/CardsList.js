import React from 'react'
import Card from '../components/Card';
function CardsList({giphyList}) {
    
    return (
        <div className="cardsList">
            {giphyList.map((item) => (
                <Card 
                image={item}
                 />
            ))}
        </div>
    )
}

export default CardsList
