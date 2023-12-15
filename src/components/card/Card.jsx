import { React } from 'react'
import "./Card.css"


function Card({ name, image, status, species }) {

    return (
        <div className='card'>
            <img src={image} alt="character image" />
            <div className='card_body'>
                <h3 className='card_title'>{name}</h3>
                <p className='card_text'>
                    <b>Status: {status}</b><br />
                    <b>Species: {species}</b>
                </p>
            </div>
        </div>
    )
}

export default Card
