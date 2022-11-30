import React from 'react'

import './main.css'

export const Main = () => {
  return (
    <div className='main-container'>
        <div className="search_group flex">
            <h2 className='search-title'>Search Properties to rent</h2>
            <select name="search" id="search">
                <option value="Search with bar" disabled>Search with Search bar</option>
                <option value="Search with bar">Search with Search bar</option>
            </select>
        </div>
    </div>
  )
}
