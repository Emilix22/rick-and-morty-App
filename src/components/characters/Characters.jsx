import { React, useContext } from 'react'
import { CharactersContext } from '../../context/charactersContext'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import InfoCharacter from '../infoCharacter/InfoCharacter'
import { Routes, Route } from 'react-router-dom'
import "./Characters.css"


function Characters() {

    const { characters } = useContext(CharactersContext)

    return (
        <Routes>
            <Route path='/' element={
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
                </>} 
            />
            <Route path='/info/:id' element={<InfoCharacter />} />

        </Routes>
        
        
    )
}

export default Characters
