import React from 'react'

import './main.css'

export const Main = () => {
  return (
    <div className='main-container'>
        <section className="search_group flex">
            <h2 className='search-title'>Search Properties to rent</h2>
            <select name="search" id="search">
                <option value="Search with bar" disabled>Search with Search bar</option>
                <option value="Search with bar">Search with Search bar</option>
            </select>
        </section>
        <section className='search_filter_area flex'>
            <div>
              <label htmlFor='location'>Location</label>
              <select name="location" id="location">
              <option value="" disabled selected>Choose Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Pune</option>
                <option value="Mumbai">Hydrabad</option>
                <option value="Mumbai">Ranchi</option>
                <option value="Mumbai">Kolkata</option>
              </select>
            </div>
            <div className='seperator'></div>
            <div>
              <label htmlFor='movedate'>When</label>
              <input type="date" name="movein_date" id="movedate"/>
            </div>
            <div className='seperator'></div>
            <div>
              <label htmlFor='price'>Price</label>
                <select name="price" id="price">
                <option value="500-1000">500-1000</option>
                <option value="500-1000">1000-2000</option>
                <option value="500-1000">2000-5000</option>
                <option value="500-1000">5000-10000</option>
              </select>
            </div>
            <div className='seperator'></div>
            <div>
              <label htmlFor='property'>Property Type</label>
              <select name="property" id="property">
                <option value="House">House</option>
                <option value="Single-Family Home">Single Family Home</option>
                <option value="Town House">Town House</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Bunglow">Bunglow</option>
              </select>
            </div>
            <div className='seperator'></div>
            <div>
              <button className='btn search'>Search</button>
            </div>           
        </section>
    </div>
  )
}
