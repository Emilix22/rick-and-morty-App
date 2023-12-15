import { React, useContext } from 'react'
import { CharactersContext } from '../../context/charactersContext'
import "./Pagination.css"

function Pagination() {

    const { totalResults, pages, actualPage, prevPage, nextPage, goToPage } = useContext(CharactersContext)


    return (
        <div className='pagination_container'>
            <div>
                <b>Total Results:</b> {totalResults}
            </div>

            <div className='butons_pagination'>
                <b>Page:</b> {actualPage} of {pages}
            </div>

            <div className='butons_pagination'>
                <b>Go to Page:</b>
                <select 
                    name="goTo" 
                    id="goTo" 
                    value={actualPage} 
                    onChange={e => goToPage("", e)}
                    data-type="goTo"
                >
                    {
                        Array.from(Array(pages).keys()).map((page) => {
                            return <option value={page + 1} key={page}>{page + 1}</option>
                        })
                    }
                </select>
            </div>

            <div className='butons_pagination'>
                {prevPage && <button data-type='prev' onClick={e => goToPage(prevPage, e)}>Prev</button>}
                {nextPage && <button data-type='next' onClick={e => goToPage(nextPage, e)}>Next</button>}
            </div>
        </div>
    )
}

export default Pagination
