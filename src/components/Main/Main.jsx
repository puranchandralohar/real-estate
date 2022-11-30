import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './main.css'

export const Main = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    let url = `https://raw.githubusercontent.com/puranchandralohar/apis/main/property.json`;
    axios.get(url)
    .then((response)=>{
      let result = response.data
      setData(result)
    })

  },[])

  console.log(data)

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
            <div>
              <label htmlFor='movedate'>When</label>
              <input type="date" name="movein_date" id="movedate"/>
            </div>
            <div>
              <label htmlFor='price'>Price</label>
                <select name="price" id="price">
                <option value="500-1000">500-1000</option>
                <option value="500-1000">1000-2000</option>
                <option value="500-1000">2000-5000</option>
                <option value="500-1000">5000-10000</option>
              </select>
            </div>
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
              <button className='btn search'>Search</button>           
        </section>

        <section className='property_list'>
            {data.map(({id,name,img,price,address,beds,bathrooms,area})=>{
              return(
                <div className="property flex" key={id}>
                  <div className="property_image">
                    <img src={img} alt={name} />
                  </div>
                  <div className="property_price">
                    <span className='property_price_tag'><strong>&#8377; {price}</strong><small>/month</small></span>
                  </div>
                  <div className="property_name">
                    <h4>{name}</h4>
                    <p>{address}</p>
                  </div>
                  <div className="amenities flex">
                    <p><i class="fa-solid fa-bed"></i> {beds} Beds</p>
                    <p><i class="fa-solid fa-bath"></i> {bathrooms} Bathrooms</p>
                    <p><i class="fa-solid fa-chart-area"></i> {area} m<sup>2</sup></p>
                  </div>
                </div>

              )
            })}
        </section>
    </div>
  )
}
