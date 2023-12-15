import { React, useContext } from 'react'
import { CharactersContext } from '../../context/charactersContext'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import "./Characters.css"


function Characters() {

    const { characters } = useContext(CharactersContext)

    return (
        
                <>
                    <Pagination />
                    <div className='characters_container'>
                        {
                            characters.map((character) => {
                                return (
                                    <Card
                                    key={character.id}
                                    image={character.image}
                                    name={character.name}
                                    status={character.status}
                                    species={character.species}
                                    id={character.id}
                                    />
                                )
                            })
                        }
                    </div>
                </>
    )
}

export default Characters
