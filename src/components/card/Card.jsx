import { React, useContext } from 'react'
import "./Card.css"
import { CharactersContext } from '../../context/charactersContext'


function Card({ name, image, status, species, id }) {

    const { goToInfo } = useContext(CharactersContext)

    return (
        <div className='card'>
            <img src={image} alt="character image" onClick={() => goToInfo(id)} />
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
