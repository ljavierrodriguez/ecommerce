import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <div className="container px-4 px-lg-5 my-5">
        <div className="row">
            <div className="col">
                <input type="search" className='form-control' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    </div>
  )
}

export default Search