import { React } from 'react'
import "./Card.css"


function Card({ name, image, status, species, type, gender, origin, location, episodes }) {

    return (
        <div className='card'>
            <img src={image} alt="character image" />
            <div className='card_body'>
                <h3 className='card_title'>{name}</h3>
                <p className='card_text'>
                    <span><b>Status:</b> {status} </span>
                    <span><b>Species:</b> {species} </span>
                    <span><b>Type:</b> {type} </span>
                    <span><b>Gender:</b> {gender} </span>
                    <span><b>Origin:</b> {origin} </span>
                    <span><b>Location:</b> {location} </span>
                    <span><b>Episodes:</b> {episodes} </span>
                </p>
            </div>
        </div>
    )
}

export default Card
