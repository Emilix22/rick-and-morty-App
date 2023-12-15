import './App.css'
import { CharactersContextProvider } from '../../context/charactersContext' 
import Characters from '../characters/Characters'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Rick and Morty App</h1>
      
      <CharactersContextProvider>
        <Characters />        
      </CharactersContextProvider>
      

    </div>
  )
}

export default App
