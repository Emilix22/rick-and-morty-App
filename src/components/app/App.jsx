import './App.css'
import { CharactersContextProvider } from '../../context/charactersContext' 
import Characters from '../characters/Characters'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Rick and Morty App</h1>
      <BrowserRouter>
        <CharactersContextProvider>
          <Characters />        
        </CharactersContextProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
