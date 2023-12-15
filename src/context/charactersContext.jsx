import { createContext, useState, useEffect } from "react";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [pages, setPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setTotalResults(data.info.count)
            setPages(data.info.pages)
            setPrevPage (data.info.prev)
            setNextPage (data.info.next)
        })
    }, [])

    const goToPage = (page, e) => {

        const type = e.target.dataset.type;

        switch (type) {
            case 'prev':
                setActualPage(actualPage - 1)
                break;
            case 'next':
                setActualPage(actualPage + 1)
                break;
            case 'goTo':
                const number = Number(e.target.value);
                page = `https://rickandmortyapi.com/api/character?page=${number}`
                setActualPage(number)
                break;    
            default:
                return;
        }

        fetch(page)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setPrevPage (data.info.prev)
            setNextPage (data.info.next)
        })
    }

    return (
        <CharactersContext.Provider value={{
            characters,
            totalResults,
            pages,
            actualPage,
            prevPage,
            nextPage,
            goToPage,

        }}>
            {children}
        </CharactersContext.Provider>
    )
}