import React from 'react';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import './search-results.css';

export const SearchScreen = () => {

  const [ {searchText}, handleInputChange, reset] = useForm({
    searchText: ''
  })
  const filteredHeroes = getHeroesByName('')

  const handleSearch = (e) => {
    e.preventDefault()

    if( searchText.trim().length <= 1) {
      return;
    }
    console.log(searchText)
  }

  return (
    <div className="container">
      <h1> Search your hero </h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search a hero"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-success mt-2 w-100"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7 result-cards">
          <h4>Results</h4>
          <hr/>
          <div className="filtered-cards">
            {
              filteredHeroes.map( hero => (
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
