import React from 'react'
import ironman from "./assets/ironman.webp"

const Card = () => {
return (
    <div>
        <h1>Soy programador</h1>
        <img src={ironman} alt="mifoto" />
        <p>Jorge Fernandez</p>
    </div>
)
}

export default Card
