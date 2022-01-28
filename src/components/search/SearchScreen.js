import React from 'react';

export const SearchScreen = () => {

  const handleSearch = () => {
    
  }

  return (
    <div className="container">
      <h1> Search your hero </h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr/>

          <form>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search a hero"
              autoComplete="off"
              name="searchText"
              // value={searchText}
            />
            <button
              type="submit"
              className="btn btn-outline-success mt-2 w-100"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};
