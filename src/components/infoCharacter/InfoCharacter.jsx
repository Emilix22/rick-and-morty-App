import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CharactersContext } from '../../context/charactersContext'
import "./InfoCharacter.css"

function InfoCharacter() {

    const { characters, back } = useContext(CharactersContext)

    const {id} = useParams();

    return (
        <div>
            {
                characters.map((character, index) => {
                  
                   return (
                        character.id === Number(id) 
                        ? <div key={character + index} className='info_container'>
                            <h3>{character.name}</h3>
                            <img width="200" src={character.image} alt="image_character" />
                            <p className='info_text'>
                              <span><b>Status:</b> {character.status} </span>
                              <span><b>Species:</b> {character.species} </span>
                              <span><b>Type:</b> {character.type} </span>
                              <span><b>Gender:</b> {character.gender} </span>
                              <span><b>Origin:</b> {character.origin.name} </span>
                              <span><b>Location:</b> {character.location.name} </span>
                              <span><b>Episodes:</b> {character.episode.length} </span>
                            </p>
                            <button onClick={() => back()}>Back</button>
                          </div> 
                        : null
                        
                    )
                })
            }
        </div>
    )
}

export default InfoCharacter
