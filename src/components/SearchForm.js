import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  
  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }
  const handSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handSubmit}>
        <div className="form-control">
          <label htmlFor="name"> search you favorite cocktail</label>
          <input type="text"
                  id="name"
                  ref={searchValue}
                  onChange={searchCocktail}
                   />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
