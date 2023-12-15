import './App.css'
import { CharactersContextProvider } from '../../context/charactersContext' 
import Characters from '../characters/Characters'
import InfoCharacter from '../infoCharacter/InfoCharacter'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Rick and Morty App</h1>
      
      <CharactersContextProvider>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/info/:id" element={<InfoCharacter />} />
        </Routes>
      </CharactersContextProvider>

    </div>
  )
}

export default App
