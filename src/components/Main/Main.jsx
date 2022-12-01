import React, { useEffect, useState } from 'react'
import { PropertyList } from './PropertyList'
import axios from 'axios'

import './main.css'

export const Main = () => {

  const [data,setData] = useState([])
  const [storeData, setStoreData] = useState([])
  const [filterData, setFilterData] = useState({
    "id":"",
    "name":"",
    "address":"",
    "location": "",
    "category": "",
  })

  useEffect(()=>{
    let url = `https://raw.githubusercontent.com/puranchandralohar/apis/main/property.json`;
    axios.get(url)
    .then((response)=>{
      let result = response.data
      setData(result)
      setStoreData(result)
      setFilterData(result)
    })

  },[])

  const handleLocation = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value })

  }

  const handleProperty = (e)=>{
    setFilterData({...filterData,[e.target.name]:e.target.value})
  }


  const handleSearch =()=>{
    const makeChanges = storeData.filter((item)=>{
      if(filterData.location === item.location || filterData.category === item.category){
          return item;
      }
    })
    setData(makeChanges)
  }

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
              <select name="location" id="location" onChange={handleLocation}>
              <option value="" disabled selected>Choose Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div>
              <label htmlFor='movedate'>When</label>
              <input type="date" name="movein_date" id="movedate"/>
            </div>
            <div>
              <label htmlFor='price'>Price</label>
                <select name="price" id="price">
                <option value="500-1000">500-1000</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-5000">2000-5000</option>
                <option value="5000-10000">5000-10000</option>
              </select>
            </div>
            <div>
              <label htmlFor='category'>Property Type</label>
              <select name="category" id="category" onChange={handleProperty}>
                <option value="House">House</option>
                <option value="Single-Family Home">Single Family Home</option>
                <option value="Town House">Town House</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Bunglow">Bunglow</option>
              </select>
            </div>
              <button className='btn search' onClick={handleSearch}>Search</button>           
        </section>
        <PropertyList data={data}/>
    </div>
  )
}
