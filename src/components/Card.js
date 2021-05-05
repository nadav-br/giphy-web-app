import React from 'react'

function Card({image}) {
    return (
        <div className="resultCard">
            <figure />
            <img src={image.images.original.url}  width="200" alt={image.title} />
        </div>
    )
}

export default Card
